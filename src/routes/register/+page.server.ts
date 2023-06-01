import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../register/$types';

const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const email = data.get("email");
        const username = data.get("username");
        const password = data.get("password");
        const passwordConfirm = data.get("passwordConfirm");

        if (!email || !username || !password || !passwordConfirm) {
            return fail(400, { email, username, password, passwordConfirm, missing: true });
        }

        if (typeof email != "string" || typeof username != "string" || typeof password != "string" || typeof passwordConfirm != "string") {
            return fail(400, { incorrect: true });
        }

        if(!validateEmail){
            return fail(422, {email});
        }

        if(password !== passwordConfirm){
            return fail(401, {email, username, password});
        }

        //Check if email already exists
        const user = await prisma.user.findUnique({
            where: { email: email }
        });
        if(user){
            return fail(409, {email});
        }

        await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: password
            },
        });

        throw redirect(303, `/`);
    }
} satisfies Actions;