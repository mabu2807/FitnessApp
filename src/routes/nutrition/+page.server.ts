import prisma from '$lib/prisma';

import type { PageServerLoad } from '../$types';

function calcallcalories(userDetails: any) {
	let allCalories = 0;
	if (userDetails.gender == 'm') {
		allCalories = 24 * userDetails.weight;
	} else {
		allCalories = 0.9 * 24 * userDetails.weight;
	}

	return allCalories;
}

export const load = (async () => {
	let response;

	try {
		response = await prisma.userDetails.findUnique({
			where: {
				userId: 1
			}
		});
	} catch (error) {
		throw new Error('DB request faild ');
	}
	if (response == null) {
		throw new Error('UserID does not exist');
	}
	const allCalories = calcallcalories(response);

	console.log(allCalories);

	// 2.
	return { userdetail: response, allcalories: allCalories };
}) satisfies PageServerLoad;
