import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { sendEmail } from '$lib/emails/SendContactMail';

export const load = (async (event) => {
	const categoryResponse = await prisma.category.findMany();
	const reviewsWithUserDetails = await prisma.review.findMany({
		include: {
			userDetails: {
				include: {
					user: true,
				},
			},
		},
	});
	
	

	const reviewData = reviewsWithUserDetails.map((review) => ({
		id: review.id,
		text: review.text,
		userName: review.userDetails.user.username,
		userImage: "data:image/png;base64,"+(review.userDetails.user.image 
			? Buffer.from(review.userDetails.user.image).toString("utf-8")
			: null),
	}));
	return { categories: categoryResponse, reviews: reviewData };
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
