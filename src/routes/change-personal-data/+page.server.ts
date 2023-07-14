import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	if (!session?.user) throw redirect(303, '/login');

	const email = session.user.email ?? '';

	const user = await prisma.user.findUnique({
		where: { email: email }
	});

	if (!user) {
		return fail(404, { email });
	}

	const userDetails = await prisma.userDetails.findUnique({
		where: { userId: user.id }
	});

	if (!userDetails) {
		return fail(404, { userId: user.id });
	}

	return { userDetails: userDetails };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.getSession();
		if (!session?.user) throw redirect(303, '/login');

		const data = await request.formData();
		const goal = data.get('goal')?.toString();
		const height = data.get('height');
		const weight = data.get('weight');
		const dob = data.get('dob')?.toString();
		const gender = data.get('gender')?.toString();
		const activityLevel = data.get('activityLevel')?.toString() ?? '1';
		const splitDate = dob?.split('-') ?? new Date().toString();
		const bdate = new Date(
			Number(splitDate[0]),
			Number(splitDate[1]) - 1,
			Number(splitDate[2]),
			2,
			0,
			0,
			0
		);

		const email = session.user.email ?? '';

		if (!goal || !height || !weight || !dob || !gender || !activityLevel) {
			return fail(400, { goal, height, weight, dob, gender, activityLevel });
		}

		const user = await prisma.user.findUnique({
			where: { email: email }
		});

		if (!user) {
			return fail(404, { email });
		}
		console.log(user);

		await prisma.userDetails.update({
			where: {
				userId: user.id
			},
			data: {
				goal: goal,
				height: Number(height),
				weight: Number(weight),
				dob: bdate,
				gender: gender,
				activityLevel: Number(activityLevel)
			}
		});

		return { message: 'successful' };
	}
} satisfies Actions;
