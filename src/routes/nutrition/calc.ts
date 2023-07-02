import type { userdetail } from './nutritionTypes';

export function calcMaxCalories(userDetails: userdetail) {
	let allCalories = 0;
	if (userDetails.gender == 'male') {
		allCalories = 24 * userDetails.weight;
	} else {
		allCalories = 0.9 * 24 * userDetails.weight;
	}
	allCalories = Math.round(allCalories);

	return allCalories;
}

export function calcOneWeekBefore() {
	const oneWeekBefore = new Date();
	oneWeekBefore.setDate(oneWeekBefore.getDate() - 7);
	oneWeekBefore.setHours(2, 0, 0, 0);
	return oneWeekBefore;
}
