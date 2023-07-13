import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions } from '../register/$types';
import { sendEmail } from '$lib/emails/SendVerificationMail';
import cryptoRandomString from 'crypto-random-string';
import bcrypt from 'bcryptjs';
import { getStartedData } from '../../stores/Data';
import type { PageServerLoad } from './$types';

const validateEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const load = (async () => {
	getStartedData.subscribe(data => {
		// Read the data
		data.forEach(item => {
		  const title = item.title;
		  const value = item.value;
		  
		  // Do something with the title and value
		  console.log(title, value);
		});
	});
}) satisfies PageServerLoad;

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

		const salt = await bcrypt.genSalt(10);
		const pwdHashed = await bcrypt.hash(password, salt); 

		const createdUser = await prisma.user.create({
			data: {
				email: email,
				username: username,
				authMethod: 'email',
				password: pwdHashed,
				token: token
			}
		});

		await prisma.userDetails.create({
			data: {
				userId: createdUser.id,
				gender: "male",
				weight: 100,
				height: 200,
				activityLevel: 1,
				goal: "Magerquark"
			}
		})

		await prisma.foodDiary.create({
			data: {
				userId: createdUser.id,
			}
		})

		await sendEmail(email, username, token);

		throw redirect(303, `/`);
	}
} satisfies Actions;
