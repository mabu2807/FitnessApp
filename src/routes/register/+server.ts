import prisma from '$lib/prisma';
import { sendEmail } from '$lib/emails/SendVerificationMail';
import cryptoRandomString from 'crypto-random-string';
import bcrypt from 'bcryptjs';

const validateEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export async function POST({ request }) {
	const requestJSON = await request.json();

	const goal = requestJSON.data[0].value;
	const height = requestJSON.data[1].value;
	const weight = requestJSON.data[2].value;
	const dob = requestJSON.data[3].value;
	const gender = requestJSON.data[4].value;
	const activityLevel = requestJSON.data[5].value;
	const username = requestJSON.data[6].value;
	const email = requestJSON.data[7].value;
	const password = requestJSON.data[8].value;
	const token = cryptoRandomString({ length: 32, type: 'url-safe' });

	if (!validateEmail(email)) {
		return new Response(JSON.stringify({ success: false }));
	}

	//Check if email already exists
	const user = await prisma.user.findUnique({
		where: { email: email }
	});
	if (user) {
		return new Response(JSON.stringify({ success: false }));
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
			gender: gender,
			weight: parseInt(weight),
			height: parseInt(height),
			activityLevel: parseInt(activityLevel),
			dob: new Date(dob),
			goal: goal
		}
	});

	await prisma.foodDiary.create({
		data: {
			userId: createdUser.id
		}
	});

	await sendEmail(email, username, token);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
