import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	if (!session?.user) throw redirect(303,'/login');

	const user = await prisma.user.findUnique({
		where: { email: session.user.email??'' }
	});

	const userSportResponse = await prisma.userSport.findMany({
		where: {
			userId: user?.id
		},
		include: {
			sport: true,
		},
	});

	const allSports = await prisma.sport.findMany();
	
	const userSportsData = userSportResponse.map((userSport) => ({
		id: userSport.sport.id,
		name: userSport.sport.name,
		description: userSport.sport.description,
		image: "data:image/png;base64,"+(userSport.sport.image
			? Buffer.from(userSport.sport.image).toString("utf-8")
			: null),
	}));

	const remainingSportsFiltered = allSports.filter((sport) => {
		return !userSportsData.some((userSport) => userSport.id === sport.id);			
	});

	const remainingSportsData = remainingSportsFiltered.map((sport) => ({
		id: sport.id,
		name: sport.name,
		description: sport.description,
		image: "data:image/png;base64,"+(sport.image
			? Buffer.from(sport.image).toString("utf-8")
			: null),
	}));

	return { userSports: userSportsData, remainingSports: remainingSportsData };
}) satisfies PageServerLoad;
