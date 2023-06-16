import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';
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
		const text = data.text;

		if (!email || !text) {
			return { email, message: 'empty fields' };
		}

		if (typeof email != 'string' || typeof text != 'string') {
			return { message: 'no string' };
			// return fail(400);
		}

		if (!validateEmail(email)) {
			return { text, message: 'invalid email' };
		}

		await sendEmail(email, text);
		return { message: 'alright' };
	}
} satisfies Actions;
