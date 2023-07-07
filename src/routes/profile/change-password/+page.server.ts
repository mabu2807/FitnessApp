import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../change-password/$types';

export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.getSession();
		if (!session?.user) throw redirect(303,'/login');

		const data = Object.fromEntries(await request.formData());

		const oldPassword = data.oldPassword;
		const newPassword = data.newPassword;
		const newPasswordRepeated = data.newPasswordRepeated;
		
		const email = session.user.email??'';

		if (!oldPassword || !newPassword || !newPasswordRepeated) {
			return fail(400, { oldPassword, newPassword, newPasswordRepeated, missing: true });
		}

		if (
			typeof oldPassword != 'string' ||
			typeof newPassword != 'string' ||
			typeof newPasswordRepeated != 'string'
		) {
			return fail(400, { incorrect: true });
		}

		const user = await prisma.user.findUnique({
			where: { email: email }
		});
		if (!user) {
			return fail(404, { email });
		}

		if (newPassword !== newPasswordRepeated) {
			return fail(401, { newPassword, newPasswordRepeated });
		}

		if (user.password !== oldPassword) {
			return fail(401, { email, oldPassword });
		}

		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				password: newPassword
			}
		});

		console.log('Changed password successfully!');

		throw redirect(303, `/profile`);
	}
} satisfies Actions;
