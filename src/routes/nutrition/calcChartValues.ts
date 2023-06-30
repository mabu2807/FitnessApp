import type { Meal } from "./nutritionTypes";

export function calcChartValues(responseUsermeals: Meal[]){
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
				if(responseUsermeals[j].dish || responseUsermeals[j].customDish){
				calperdayunsorted[i] =
					calperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.energy ?? responseUsermeals[j].customDish?.nutritionalValues.energy ?? 0);
				saltperdayunsorted[i] =
					saltperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.salt ?? responseUsermeals[j].customDish?.nutritionalValues.salt ?? 0);
				sugarperdayunsorted[i] =
					sugarperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.sugar ?? responseUsermeals[j].customDish?.nutritionalValues.sugar ?? 0);
				saturatedFatperdayunsorted[i] =
					saturatedFatperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.saturatedFat ?? responseUsermeals[j].customDish?.nutritionalValues.saturatedFat ?? 0);
				carbohydratesperdayunsorted[i] =
					carbohydratesperdayunsorted[i] +
					(responseUsermeals[j].dish?.nutritionalValues.carbohydrates ?? responseUsermeals[j].customDish?.nutritionalValues.carbohydrates ?? 0);
				fatperdayunsorted[i] =
					fatperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.fat ?? responseUsermeals[j].customDish?.nutritionalValues.fat ?? 0);
				proteinperdayunsorted[i] =
					proteinperdayunsorted[i] + (responseUsermeals[j].dish?.nutritionalValues.protein ?? responseUsermeals[j].customDish?.nutritionalValues.protein ?? 0);
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
    return allValues;
}