import type { LayoutServerLoad } from './$types';
import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	const session = await locals.getSession();
	let user;
	if (session?.user) {
		try {
			 user = await prisma.user.findUniqueOrThrow({
				where: {
					email: session.user.email ?? ''
				}
			});
		} catch (error) {
			throw redirect(303, '/login');
		}
		cookies.set('user_id', user.id.toString())
	}
	return {
		session: await locals.getSession()
	};
};
