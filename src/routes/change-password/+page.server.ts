import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import bcrypt from 'bcryptjs';

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
			return {oldPassword, newPassword, newPasswordRepeated, message: 'empty fields'};
		}

		if (
			typeof oldPassword != 'string' ||
			typeof newPassword != 'string' ||
			typeof newPasswordRepeated != 'string'
		) {
			return { message: 'no string'};
		}

		const user = await prisma.user.findUnique({
			where: { email: email }
		});

		if (!user) {
			return fail(404, { email });
		}

		if (newPassword !== newPasswordRepeated) {
			return { newPassword, newPasswordRepeated, message: "passwords not matching" };
		}

		if(!bcrypt.compareSync(oldPassword, user.password??'')){
			return { message: 'login error' };
		}

		const salt = await bcrypt.genSalt(10);
		const pwdHashed = await bcrypt.hash(newPassword, salt);

		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				password: pwdHashed
			}
		});

		return {message: "successful"};

	}
} satisfies Actions;
