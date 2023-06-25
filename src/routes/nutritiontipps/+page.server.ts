import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

export const load = (async () => {
	let responseArticle;

	try {
		responseArticle = await prisma.nutritionTippsArticles.findMany();
	} catch (error) {
		return fail(404, { message: 'No article found' });
	}

	return { articles: responseArticle };
}) satisfies PageServerLoad;
