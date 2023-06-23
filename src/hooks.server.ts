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
            console.log(profile?.email)
            let user_name = 'test'
            let email = 'test@test.de'
            let respone_user;
            if(profile?.email !== undefined && profile?.email !== null){
                email = profile.email
            }
            if(profile?.nickname !== undefined && profile?.nickname !== null){
                user_name = profile?.nickname
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
                    
                } catch (error) {
                    console.log(error)
                }

            }
            

            
          

            

            return true
        }
    },
})
            
            
            
            


