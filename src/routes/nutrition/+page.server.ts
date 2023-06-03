import prisma from '$lib/prisma';
import type { PageServerLoad } from '../$types';
import { initChartData } from './initChartData';

//types
export type userdetail = {
	id: number;
	gender: string;
	weight: number;
	height: number;
	foodDiaryId: number;
};

//calculation max calories for the user per day
function calcallcalories(userDetails: userdetail) {
	let allCalories = 0;
	if (userDetails.gender == 'm') {
		allCalories = 24 * userDetails.weight;
	} else {
		allCalories = 0.9 * 24 * userDetails.weight;
	}

	return allCalories;
}

// Load function
export const load = (async () => {
	let responseUserDetails;
	let responseUsermeals;
	try {
		responseUserDetails = await prisma.userDetails.findUnique({
			where: {
				userId: 1
			}
		});
		responseUsermeals = await prisma.meal.findMany({
			where: {
				foodDiaryId: 1
			},
			include: {
				dish: true
			}
		});
	} catch (error) {
		throw new Error('DB request faild ');
	}
	if (responseUserDetails == null) {
		throw new Error('UserID does not exist');
	}
	if (responseUsermeals == null) {
		throw new Error('User have no meals :)');
	}

	const allCalories = calcallcalories(responseUserDetails);
	//const chartdata  = initChartData(allCalories, responseUsermeals)

	console.log(responseUserDetails);
	console.log(responseUsermeals);

	// 2.
	return { userdetail: responseUserDetails, allcalories: allCalories };
}) satisfies PageServerLoad;
