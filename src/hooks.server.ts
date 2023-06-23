import { SvelteKitAuth } from '@auth/sveltekit'
import GitHub from "@auth/core/providers/github";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Prisma } from '@prisma/client';


export const handle = SvelteKitAuth({
    providers: [
        GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }) as any,
    ],
    secret: 'mysecret',
    callbacks: {
        signIn: ({profile, user:email}) => {

            console.log(email)

            // SELECT * FROM users WHERE email = {email}
          

            

            return true
        }
    },
})
            
            
            
            // let user_name = 'test'
            // let email = 'test@test.de'
            // let respone_user;
            // if(user.email !== undefined && user.email !== null){
            //     email = user.email
            // }
            // if(user.name !== undefined && user.name !== null){
            //     user_name = user.name
            // }
            // try {
            //     (async () => {
            //        respone_user= await prisma.user.findUnique({
            //             where:{
            //                 email: email
            //             }
            //         })
            //     })();
                
            // } catch (error) {
            //     console.log(error)
            // }
            // if(respone_user == null || respone_user == undefined){
            //     const user:Prisma.UserCreateInput = {
            //         "email": email,
            //         "username": user_name,
            //         "password": null,
            //         "auth_method": "github"
            //     }
            //     try {
            //         (async () => {
            //             await prisma.user.create({
            //                 data:user
            //             })
                            
            //         })();
                    
            //     } catch (error) {
            //         console.log(error)
            //     }

            // }


