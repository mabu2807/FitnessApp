import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { initChartData, allmaxvalues } from './initChartData';
import type { userdetail } from './nutritionTypes';
import type { Prisma } from '@prisma/client';

//calculation max calories for the user per day
function calcMaxCalories(userDetails: userdetail) {
	let allCalories = 0;
	if (userDetails.gender == 'male') {
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
	let responsedaymeal;
	let responseFoodDiaryID;
	let responseAllDishes;
	try {
		//all calories request
		responseUserDetails = await prisma.userDetails.findUnique({
			where: {
				userId: 2
			}
		});
		const heute = new Date();

		// Calc on week before
		const eineWocheZuvor = new Date();
		eineWocheZuvor.setDate(heute.getDate() - 7);
		eineWocheZuvor.setHours(2, 0, 0, 0);

		responseFoodDiaryID = await prisma.foodDiary.findUnique({
			where: {
				userId: responseUserDetails?.userId
			}
		});
		let foodDiary = 0;
		if (responseFoodDiaryID != undefined) {
			foodDiary = responseFoodDiaryID.id;
		}

		// Chart data request
		responseUsermeals = await prisma.meal.findMany({
			where: {
				day: {
					gt: eineWocheZuvor
				},
				foodDiaryId: foodDiary
			},
			include: {
				foodDiary: true,
				dish: {
					include: {
						nutritionalValues: true
					}
				}
			}
		});
		// Calc on week before
		const todayMidnight = new Date();
		todayMidnight.setHours(2, 0, 0, 0);
		responsedaymeal = await prisma.meal.findMany({
			where: {
				day: {
					gt: todayMidnight
				},
				foodDiaryId: responseFoodDiaryID?.id
			},
			include: {
				dish: {
					include: {
						nutritionalValues: true
					}
				}
			}
		});
		responseAllDishes = await prisma.dish.findMany({
			include: {
				nutritionalValues: true
			}
		});
	} catch (error) {
		return fail(400, { message: 'Bad request' });
	}
	if (responseUserDetails == null) {
		return fail(404, { message: 'UserID does not exist' });
	}
	if (responseUsermeals == null) {
		return fail(404, { message: 'User have no meals' });
	}
	if (responseAllDishes == null) {
		return fail(404, { message: 'User have no dishes' });
	}
	if (responsedaymeal == null) {
		return fail(404, { message: 'User have no meals' });
	}
	if (responseFoodDiaryID == null) {
		return fail(404, { message: 'User have no food diary' });
	}
	const maxCalories = calcMaxCalories(responseUserDetails);

	// ------------- init chart data ----------------------------------------
	const calperdayunsorted = [0, 0, 0, 0, 0, 0, 0];
	const saltperdayunsorted = [0, 0, 0, 0, 0, 0, 0];
	const sugarperdayunsorted = [0, 0, 0, 0, 0, 0, 0];
	const saturatedFatperdayunsorted = [0, 0, 0, 0, 0, 0, 0];
	const carbohydratesperdayunsorted = [0, 0, 0, 0, 0, 0, 0];
	const fatperdayunsorted = [0, 0, 0, 0, 0, 0, 0];
	const proteinperdayunsorted = [0, 0, 0, 0, 0, 0, 0];
	 for (let i = 0; i < 7; i++) {
		for (let j = 0; j < responseUsermeals.length; j++) {
			if (responseUsermeals[j].day.getDay() === i) {
				if(responseUsermeals[j].dish && responseUsermeals[j] && responseUsermeals){
				calperdayunsorted[i] =
					calperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.energy ?? 0);
				saltperdayunsorted[i] =
					saltperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.salt ?? 0);
				sugarperdayunsorted[i] =
					sugarperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.sugar ?? 0);
				saturatedFatperdayunsorted[i] =
					saturatedFatperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.saturatedFat ?? 0);
				carbohydratesperdayunsorted[i] =
					carbohydratesperdayunsorted[i] +
					(responseUsermeals[j].dish?.nutritionalValues.carbohydrates ?? 0);
				fatperdayunsorted[i] =
					fatperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.fat ?? 0);
				proteinperdayunsorted[i] =
					proteinperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.protein ?? 0);
				}	
				}
			
		} 
	}
	const today = new Date();
	let weekday = today.getDay();
	let calperday = [];
	let fatperday = [];
	let saltperday = [];
	let proteinperday = [];
	let saturatedFatperday = [];
	let sugarperday = [];
	let carbohydratesperday = [];
	if (weekday !== 6) {
		for (let i = 0; i < 7; i++) {
			weekday = weekday + 1;
			calperday.push(calperdayunsorted[weekday]);
			fatperday.push(fatperdayunsorted[weekday]);
			saltperday.push(saltperdayunsorted[weekday]);
			proteinperday.push(proteinperdayunsorted[weekday]);
			saturatedFatperday.push(saturatedFatperdayunsorted[weekday]);
			sugarperday.push(sugarperdayunsorted[weekday]);
			carbohydratesperday.push(carbohydratesperdayunsorted[weekday]);
			if (weekday == 6) {
				weekday = -1;
			}
		}
	} else {
		calperday = calperdayunsorted;
		fatperday = fatperdayunsorted;
		saltperday = saltperdayunsorted;
		proteinperday = proteinperdayunsorted;
		saturatedFatperday = saturatedFatperdayunsorted;
		sugarperday = sugarperdayunsorted;
		carbohydratesperday = carbohydratesperdayunsorted;
	}
	const allValues = {
		calories: calperday,
		fat: fatperday,
		sugar: sugarperday,
		salt: saltperday,
		protein: proteinperday,
		carbohydrates: carbohydratesperday,
		saturatedFat: saturatedFatperday
	};
	const allmaxValues = allmaxvalues(responseUserDetails, maxCalories);

	const chartdata = initChartData(allmaxValues, allValues);
	console.log(responsedaymeal);
	// -------------------------- return -------------------------------------------
	return {
		chartdata: chartdata,
		mealsforCards: responsedaymeal,
		allmaxValues: allmaxValues,
		allValues: allValues,
		allDishes: responseAllDishes
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	createMealfromTemplate: async ({ request }) => {
		const data = await request.formData();
		const selectDish = data.get('selectDish');
		let category = data.get('category')?.toString();
		if (category == undefined) {
			category = 'Snack';
		}
		const day = new Date();
		const foodID = 1;
		if (selectDish != null) {
			const meal: Prisma.MealUncheckedCreateInput = {
				dishId: Number(selectDish),
				day: day,
				time: category,
				foodDiaryId: foodID
			};
			try {
				await prisma.meal.create({
					data: meal
				});
			} catch (error) {
				return fail(400, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
			}
		}
	},
	createCustomMeal: async ({ request }) => {
		const data = await request.formData();
		// const createData: Prisma.MealCreateWithoutFoodDiaryInput = {
		// 	dish:{
		// 		create:{

		// 		}
		// 	},
		// 	day: new Date(),
		// 	time: category,
		// 	foodDiaryId: foodID
		// };
		
		// try {
		// 	await prisma.meal.create({
		// 		data: createData
		// 	})
		// } catch (error) {
		// 	return fail(400, {message: 'Meal konnte nicht angelegt werden, '})
		// }

		
	},

	updateMeal: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
	}
} satisfies Actions;
