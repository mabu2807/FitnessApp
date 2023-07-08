import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client';
import Credentials from '@auth/core/providers/credentials';
import type { User } from '@auth/core/types';
import { fail} from '@sveltejs/kit';
export const handle = SvelteKitAuth({

    providers: [
        GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }) as any,
        Credentials( {
            credentials: {
                email: { label: "Email" },
                password: { label: "Password", type: "password" },
              },
              async authorize( credentials) {
                let response_user;
                try {
                    response_user = await prisma.user.findUniqueOrThrow({
                        where:{
                            email: credentials.email as string
                        }    
                    })
                } catch (error) {
                    fail(303, {message: 'Login error'})
                }

            if (response_user?.password == credentials.password as string || response_user?.verified == true) {
                return {
                    id: ""+response_user?.id,
                    email: response_user?.email,
                    name: response_user?.username,
                } as User
            }
            else {
                
                return null 
            } 
        }
        })        
    ],
    secret: 'mysecret',
    trustHost: true,
    callbacks: {
        signIn: async ({profile, user}) => {
            if (profile == undefined && user == undefined){ 
                return false
            }
            if (profile != undefined){
                const email = profile?.email as string
                let userName = ''
                const response_user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })
                if (user == undefined){
                    if (response_user == undefined){
                    if(profile?.name !== undefined && profile?.name !== null){
                        userName = profile?.name ?? ''
                        userName = userName.toLowerCase()
                        userName = userName.replace(' ','.')
                    } 
                    
                    const user:Prisma.UserCreateInput = {
                        email: profile?.email as string,
                        username: userName ?? '',
                        password: null,
                        authMethod: "github",
                        token: profile?.email as string,
                        verified: true,
                    }
                    await prisma.user.create({
                        data:user
                    })
                    const responseUser = await prisma.user.findUnique({
                        where: {
                            email: email
                        }
                    })
                    const userDetails:Prisma.UserDetailsUncheckedCreateInput = {
                        userId: responseUser?.id as number,
                        activityLevel:0,
                        gender:'male',
                        goal: 'Stay Fit',
                        height:0,
                        weight:0,   
                        }
                        await prisma.userDetails.create({
                            data:userDetails
                     })  
                    const foodDiary:Prisma.FoodDiaryUncheckedCreateInput = {
                        userId: responseUser?.id as number,   
                    }
                    await prisma.foodDiary.create({
                        data:foodDiary
                    }) 
            }
        }
            console.log(user)
        }
        return true
        }
    }
})
        
            
            
            


		