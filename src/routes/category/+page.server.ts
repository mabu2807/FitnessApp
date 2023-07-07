import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const sportsResponse = await prisma.sport.findMany();
	const sportsData = sportsResponse.map((sport) => ({
		id: sport.id,
		name: sport.name,
		description: sport.description,
		image: "data:image/png;base64,"+(sport.image
			? Buffer.from(sport.image).toString("utf-8")
			: null),
	}));
	return { sports: sportsData };
}) satisfies PageServerLoad;
