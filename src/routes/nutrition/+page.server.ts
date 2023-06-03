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
	const date = new Date;
	const day = new Date;
	day.setDate(-6)
	day.setHours(0, 0, 0, 0);
	console.log(day)

	try {
		responseUserDetails = await prisma.userDetails.findUnique({
			where: {
				userId: 1
			}
		});
		responseUsermeals = await prisma.meal.groupBy({
			by:['day','dishId'],
			where:{
				day:{
					gte: day
				}
			},
			_count:{
				dishId:true
			}

			
			
		 });
		// const responsetest = await prisma.meal.findMany({
		// 	include:{
		// 		dish:{
		// 			include:{
		// 				nutritionalValues: true
		// 			}
		// 		}
		// 	}
		// });
		//console.log(responsetest)
	} catch (error) {
		throw new Error('DB request faild ');
	}
	if (responseUserDetails == null) {
		throw new Error('UserID does not exist');
	}
	if (responseUsermeals == null) {
		throw new Error('User have no meals :)');
	}
	const test = responseUsermeals[0]
	const allCalories = calcallcalories(responseUserDetails);
	//const chartdata  = initChartData(allCalories, responseUsermeals)
	console.log();
	responseUserDetails

	// 2.
	return { userdetail: responseUserDetails, allcalories: allCalories };
}) satisfies PageServerLoad;
