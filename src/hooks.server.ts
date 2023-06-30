import { SvelteKitAuth } from '@auth/sveltekit'
import GitHub from "@auth/core/providers/github";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client';


export const handle = SvelteKitAuth({
    providers: [
        
        GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }) as any,
    ],
    secret: 'mysecret',
    callbacks: {
        signIn: async ({profile}) => {
            console.log(profile?.name)
            let user_name = 'test'
            let email = 'test@test.de'
            let respone_user;
            if(profile?.email !== undefined && profile?.email !== null){
                email = profile.email
            }
            if(profile?.name !== undefined && profile?.name !== null){
                user_name = profile?.name
                user_name = user_name.toLowerCase()
                user_name = user_name.replace(' ','.')
            }
            
            try {
                respone_user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })
            } catch (error) {
                console.log(error)
            }
            if(respone_user == null || respone_user == undefined){
                const user:Prisma.UserCreateInput = {
                    "email": email,
                    "username": user_name,
                    "password": null,
                    "auth_method": "github"
                }
                try {
                        await prisma.user.create({
                            data:user
                        })

                        const respone_user_id = await prisma.user.findUnique({
                            where: {
                                email: email
                            }
                        })
                        let userid = 0
                        if(respone_user_id?.id !== undefined && respone_user_id?.id !== null){
                            userid = respone_user_id?.id
                        }
                        const foodDiary:Prisma.FoodDiaryUncheckedCreateInput = {
                        userId:userid    
                        }
                        await prisma.foodDiary.create({
                            data:foodDiary
                        })   
                        const userDetails:Prisma.UserDetailsUncheckedCreateInput = {
                            userId:userid,
                            activityLevel:0,
                            gender:'male',
                            height:0,
                            weight:0,   
                            }
                            await prisma.userDetails.create({
                                data:userDetails
                         })   

                } catch (error) {
                    console.log(error)
                }
            }
            return true
        }
    },
})
            
            
            
            

