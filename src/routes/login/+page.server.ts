import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions } from '../login/$types';
import bcrypt from 'bcryptjs';

const validateEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return { email, password, message: 'empty fields' };
		}

		if (typeof email != 'string' || typeof password != 'string') {
			return { message: 'no string' };
		}

		if (!validateEmail(email)) {
			return { password, message: 'invalid email' };
		}

		//Check if email already exists
		const user = await prisma.user.findUnique({
			where: { email: email }
		});
		if (!user) {
			return { message: 'login error' };
		}

		if(!bcrypt.compareSync(password, user.password??'')){
			return { message: 'login error' };
		}

		throw redirect(303, `/`);
	}
} satisfies Actions;
