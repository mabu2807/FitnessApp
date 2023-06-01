import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../login/$types';

const validateEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

        const email = data.get("email")
        const password = data.get("password")

        if (!email || !password) {
            return fail(400, { email, password, missing: true });
        }

        if (typeof email != "string" || typeof password != "string") {
            return fail(400, { incorrect: true })
        }


		if (!validateEmail) {
			return fail(422, { email });
		}

        //Check if email already exists
        const user = await prisma.user.findUnique({
            where: { email: email }
        });
        if(!user){
            return fail(404, {email})
        }

        if(user.password !== password) {
            return fail(401, {email, password})
        }

        console.log("Login Successful!")


		throw redirect(303, `/`);
	}
} satisfies Actions;
