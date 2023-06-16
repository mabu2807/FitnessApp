import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { sendEmail } from '$lib/emails/SendContactMail';

export const load = (async () => {
	const categoryResponse = await prisma.category.findMany();
	const reviewResponse = await prisma.review.findMany();
	return { categories: categoryResponse, reviews: reviewResponse };
}) satisfies PageServerLoad;


const validateEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


export const actions = {
    default: async ({ request }) => {
        const data = Object.fromEntries(await request.formData());

        const email = data.email;
        const message = data.message;

        if (!email || !message) {
            return fail(400, { email, message, missing: true });
        }
    
        if (
            typeof email != 'string' || typeof message != 'string' 
        ) {
            return fail(400, { incorrect: true });
        }

        if (!validateEmail) {
            return fail(422, { email });
        }


        await sendEmail(email, message);


        throw redirect(303, '/');
    }
} satisfies Actions;