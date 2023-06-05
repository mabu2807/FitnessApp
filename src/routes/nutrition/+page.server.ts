import prisma from '$lib/prisma';
import type { PageServerLoad } from '../$types';
import { initChartData } from './initChartData';

//types
export type userdetail = {
	userId: number;
	gender: string;
	weight: number;
	height: number;
};

//calculation max calories for the user per day
function calcallcalories(userDetails: userdetail) {
	let allCalories = 0;
	if (userDetails.gender == 'm') {
		allCalories = 24 * userDetails.weight;
	} else {
		allCalories = 0.9 * 24 * userDetails.weight;
	}
	allCalories = Math.round(allCalories);

	return allCalories;
}

// Load function
export const load = (async () => {
	let responseUserDetails;
	let responseUsermeals;
	let responedaymeal;
	try {
		//all calories request
		responseUserDetails = await prisma.userDetails.findUnique({
			where: {
				userId: 1
			}
		});
		const heute = new Date();

		// Calc on week before
		const eineWocheZuvor = new Date();
		eineWocheZuvor.setDate(heute.getDate() - 7);
		eineWocheZuvor.setHours(2,0,0,0);
		// Chart data request
		responseUsermeals = await prisma.meal.findMany({
			where:{
				day: {
					gt: eineWocheZuvor
				}
			},
			include: {
				dish: {
					include: {
						nutritionalValues: true
					},
					
				}
			}
		});


		// Calc on week before
		const todayMidnight = new Date();
		todayMidnight.setHours(2,0,0,0);
		responedaymeal = await prisma.meal.findMany({
			where:{
				day:{
					gt: todayMidnight
				}
			},
			include: {
				dish: {
					include: {
						nutritionalValues: true
					},
					
				}

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

	// ------------- init chart data ----------------------------------------
	const calperdayunsorted = [0, 0, 0, 0, 0, 0, 0];
	for (let i = 0; i < 7; i++) {
		for (let j = 0; j < responseUsermeals.length; j++) {
			if (responseUsermeals[j].day.getDay() == i) {
				calperdayunsorted[i] = calperdayunsorted[i] + responseUsermeals[j].dish.nutritionalValues.energy;				
			}
		}
	}
	const today = new Date();
	let weekday = today.getDay();
	let calperday = [];
	if (weekday !== 6) {
		for (let i = 0; i < 7; i++) {
			weekday = weekday + 1;
			calperday.push(calperdayunsorted[weekday]);
			if (weekday == 6) {
				weekday = -1;
			}
		}
	} else {
		calperday = calperdayunsorted;
	}
	const chartdata = initChartData(allCalories, calperday);
	
	// -------------------------- return -------------------------------------------
	return {allcalories: allCalories, chartdata:chartdata, mealsforCards: responedaymeal};
}) satisfies PageServerLoad;
