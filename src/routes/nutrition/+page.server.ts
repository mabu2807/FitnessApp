import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { initChartData , allmaxvalues} from './initChartData';
import type { userdetail } from './nutritionTypes';




//calculation max calories for the user per day
function calcMaxCalories(userDetails:userdetail) {
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
	let responsedaymeal;
	let responseFoodDiaryID;
	try {
		//all calories request
		responseUserDetails = await prisma.userDetails.findUnique({
			where: {
				userId: 2
			},
			
		});
		const heute = new Date();

		// Calc on week before
		const eineWocheZuvor = new Date();
		eineWocheZuvor.setDate(heute.getDate() - 7);
		eineWocheZuvor.setHours(2,0,0,0);

		responseFoodDiaryID = await prisma.foodDiary.findUnique({
			where:{
				userId: responseUserDetails?.userId
			}
		})
		let foodDiary = 0
		if(responseFoodDiaryID != undefined){
			foodDiary = responseFoodDiaryID.id
		}


		// Chart data request
		responseUsermeals = await prisma.meal.findMany({
			where:{
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
					},
					
				}
			}
		});
		// Calc on week before
		const todayMidnight = new Date();
		todayMidnight.setHours(2,0,0,0);
		responsedaymeal = await prisma.meal.findMany({
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
		})
	} catch (error) {
		throw new Error('DB request faild ');
	}
	if (responseUserDetails == null) {
		throw new Error('UserID does not exist');
	}
	if (responseUsermeals == null) {
		throw new Error('User have no meals :)');
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
			if (responseUsermeals[j].day.getDay() == i) {
				calperdayunsorted[i] = calperdayunsorted[i] + responseUsermeals[j].dish.nutritionalValues.energy;
				saltperdayunsorted[i] = saltperdayunsorted[i] + responseUsermeals[j].dish.nutritionalValues.salt;	
				sugarperdayunsorted[i] = sugarperdayunsorted[i] + responseUsermeals[j].dish.nutritionalValues.sugar;	
				saturatedFatperdayunsorted[i] = saturatedFatperdayunsorted[i] + responseUsermeals[j].dish.nutritionalValues.saturatedFat;	
				carbohydratesperdayunsorted[i] = carbohydratesperdayunsorted[i] + responseUsermeals[j].dish.nutritionalValues.carbohydrates;	
				fatperdayunsorted[i] = fatperdayunsorted[i] + responseUsermeals[j].dish.nutritionalValues.fat;					
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
	const chartdata = initChartData(maxCalories, calperday);
	const allmaxValues = allmaxvalues(responseUserDetails,maxCalories);
	const allChartValues = {calories:calperday,fat:fatperday,sugar:sugarperday,salt:saltperday,protein:proteinperday,carbohydrates:carbohydratesperday,saturatedFat:saturatedFatperday}
	
	
	
	// -------------------------- return -------------------------------------------
	return {chartdata:chartdata, mealsforCards: responsedaymeal, allmaxValues:allmaxValues, allChartValues: allChartValues};
}) satisfies PageServerLoad;

