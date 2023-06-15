import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const categoryResponse = await prisma.category.findMany();
	const reviewResponse = await prisma.review.findMany();
	return { categories: categoryResponse, reviews: reviewResponse };
}) satisfies PageServerLoad;