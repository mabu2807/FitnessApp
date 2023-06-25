import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions } from '../register/$types';
import { sendEmail } from '$lib/emails/SendVerificationMail';
import cryptoRandomString from 'crypto-random-string';

const validateEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		const email = data.email;
		const username = data.username;
		const password = data.password;
		const passwordConfirm = data.passwordConfirm;
		const token = cryptoRandomString({ length: 32, type: 'url-safe' });

		if (!email || !username || !password || !passwordConfirm) {
			return { email, username, password, passwordConfirm, message: 'empty fields' };
		}

		if (
			typeof email != 'string' ||
			typeof username != 'string' ||
			typeof password != 'string' ||
			typeof passwordConfirm != 'string'
		) {
			return { message: 'no string' };
		}

		if (!validateEmail(email)) {
			return { username, password, passwordConfirm, message: 'invalid email' };
		}

		if (password !== passwordConfirm) {
			return { email, username, password, message: 'passwords not matching' };
		}

		//Check if email already exists
		const user = await prisma.user.findUnique({
			where: { email: email }
		});
		if (user) {
			return { message: 'already registered' };
		}

		await prisma.user.create({
			data: {
				email: email,
				username: username,
				authMethod: "email",
				password: password,
				token: token
			}
		});

		await sendEmail(email, username, token);

		throw redirect(303, `/`);
	}
} satisfies Actions;
