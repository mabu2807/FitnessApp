import type { userdetail } from "./nutritionTypes";

export function initChartData(maxCalories: number, calperday: number[]) {
	const week = calcWeekArray();
	
	const data = {
		labels: week,
		datasets: [
			{
				label: 'kcal',
				data: calperday,
				backgroundColor: changeBgColors(maxCalories, calperday),
				borderWidth: 1,
				borderColor: changeBgColors(maxCalories, calperday),
				hidden:true
			}
		]
	};
	return data;
}

function calcWeekArray() {
	const exampleweek = [
		'Sonntag',
		'Montag',
		'Dienstag',
		'Mittwoch',
		'Donnerstag',
		'Freitag',
		'Samstag'
	];
	const day = new Date();

	let weekday = day.getDay();
	if (weekday == 7) {
		weekday = -1;
	}
	const week: string[] = [];
	for (let i = 0; i < 7; i++) {
		weekday = weekday + 1;
		week.push(exampleweek[weekday]);
		if (weekday == 6) {
			weekday = -1;
		}
	}
	return week;
}

function changeBgColors(maxCalories: number, calperday: number[]) {
	const backgroundColor = [
		'rgba(98,  182, 239,0.4)',
		'rgba(113, 205, 205,0.4)',
		'rgba(98,  182, 239,0.4)',
		'rgba(113, 205, 205,0.4)',
		'rgba(98,  182, 239,0.4)',
		'rgba(113, 205, 205,0.4)',
		'rgba(98,  182, 239,0.4)'
	];

	const red = 'rgb(255, 99, 132)';
	for (let i = 0; i < calperday.length; i++) {
		if (calperday[i] > Number(maxCalories)) {
			backgroundColor[i] = red;
		}
	}
	return backgroundColor;
}
function changeBorderColors(maxCalories: number, calperday: number[]) {
	const borderColor = [
		'rgba(98,  182, 239, 1)',
		'rgba(113, 205, 205, 1)',
		'rgba(98,  182, 239, 1)',
		'rgba(113, 205, 205, 1)',
		'rgba(98,  182, 239, 1)',
		'rgba(113, 205, 205, 1)',
		'rgba(98, 182, 239, 1)'
	];
	const red = 'rgb(255, 99, 132, 0.4)';
	for (let i = 0; i < calperday.length; i++) {
		if (calperday[i] > Number(maxCalories)) {
			borderColor[i] = red;
		}
	}
	return borderColor;
}


export function allmaxvalues(userDetails:userdetail, maxCalories:number){
	const salt = 6
	const fat = (65/2000)*maxCalories
	const sugar = (50/2000)*maxCalories
	const protein = 0.8*userDetails.weight
	const saturatedFat = 22
	let carbohydrates = 0
	if(userDetails.gender == "male"){
		carbohydrates = 225
	}else{
		carbohydrates = 275
	}

	const allmaxValues = {calories:maxCalories,fat:fat,sugar:sugar,salt:salt,protein:protein,carbohydrates:carbohydrates,saturatedFat:saturatedFat}
	return allmaxValues

}
