import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const email = data.get("email")
        const username = data.get("username")
        const password = data.get("password")

        if (!email || !username || !password) {
            return fail(400, { email, username, password, missing: true });
        }

        if (typeof email != "string" || typeof username != "string" || typeof password != "string") {
            return fail(400, { incorrect: true })
        }

        //Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return fail(422, {email})
        }

        //Check if email already exists
        const user = await prisma.user.findUnique({
            where: { email: email }
        });
        if(user){
            return fail(409, {email})
        }

        await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: password
            },
        });

        throw redirect(303, `/`)
    }
} satisfies Actions;