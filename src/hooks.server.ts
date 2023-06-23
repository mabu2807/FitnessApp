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
            
            

            
          

            

            return true
        }
    },
})
            
            
            
            


