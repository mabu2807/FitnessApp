import type { allValues, allmaxValues, userdetail } from './nutritionTypes';

export function initChartData(allmaxValues: allmaxValues, allValues: allValues) {
	const week = calcWeekArray();
	const chartColors = {
		calories: "#909CC2",
		fat:"#ff7970",
		sugar: "#A0A595",
		salt: "#42EAD4",
		protein: "#26547C",
		carbohydrates:"#708F56",
		saturatedFat: "#F6AD2D"
	};

	const data = {
		labels: week,
		datasets: [
			{
				label: 'Kalorien',
				data: allValues.calories,
				backgroundColor: changeBgColors(allmaxValues.calories, allValues.calories, chartColors.calories),
				borderWidth: 1,
				borderColor: changeBorderColors(allmaxValues.calories, allValues.calories, chartColors.calories)
			},
			{
				label: 'Fett',
				data: allValues.fat,
				backgroundColor: changeBgColors(allmaxValues.fat, allValues.fat, chartColors.fat),
				borderWidth: 1,
				borderColor: changeBorderColors(allmaxValues.fat, allValues.fat, chartColors.fat),
				hidden: true
			},
			{
				label: 'Zucker',
				data: allValues.sugar,
				backgroundColor: changeBgColors(allmaxValues.sugar, allValues.sugar, chartColors.sugar),
				borderWidth: 1,
				borderColor: changeBorderColors(allmaxValues.sugar, allValues.sugar, chartColors.sugar),
				hidden: true
			},
			{
				label: 'Salz',
				data: allValues.salt,
				backgroundColor: changeBgColors(allmaxValues.salt, allValues.salt, chartColors.salt),
				borderWidth: 1,
				borderColor: changeBorderColors(allmaxValues.salt, allValues.salt, chartColors.salt),
				hidden: true
			},
			{
				label: 'Eiweiß',
				data: allValues.protein,
				backgroundColor: changeBgColors(allmaxValues.protein, allValues.protein, chartColors.protein),
				borderWidth: 1,
				borderColor: changeBorderColors(allmaxValues.protein, allValues.protein, chartColors.protein),
				hidden: true
			},
			{
				label: 'Kohlenhydrate',
				data: allValues.carbohydrates,
				backgroundColor: changeBgColors(allmaxValues.carbohydrates, allValues.carbohydrates, chartColors.carbohydrates),
				borderWidth: 1,
				borderColor: changeBorderColors(allmaxValues.carbohydrates, allValues.carbohydrates, chartColors.carbohydrates),
				hidden: true
			},
			{
				label: 'gesätigte Fettsäuren',
				data: allValues.saturatedFat,
				backgroundColor: changeBgColors(allmaxValues.saturatedFat, allValues.saturatedFat, chartColors.saturatedFat),
				borderWidth: 1,
				borderColor: changeBorderColors(allmaxValues.saturatedFat, allValues.saturatedFat, chartColors.saturatedFat),
				hidden: true
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
	if (weekday == 6) {
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

function changeBgColors(maxValue: number, calperday: number[], color:string) {
	const backgroundColor = [
		color,
		color,
		color,
		color,
		color,
		color,
		color
	];

	const red = 'rgb(255, 99, 132)';
	for (let i = 0; i < calperday.length; i++) {
		if (calperday[i] > Number(maxValue)) {
			backgroundColor[i] = red;
		}
	}
	return backgroundColor;
}
function changeBorderColors(maxCalories: number, calperday: number[], color:string) {
	const borderColor = [
		color,
		color,
		color,
		color,
		color,
		color,
		color
	];
	
	const red = 'rgb(255, 99, 132, 0.4)';
	for (let i = 0; i < calperday.length; i++) {
		if (calperday[i] > Number(maxCalories)) {
			borderColor[i] = red;
		}
	}
	return borderColor;
}

export function allmaxvalues(userDetails: userdetail, maxCalories: number) {
	const salt = 6;
	const fat = (65 / 2000) * maxCalories;
	const sugar = (50 / 2000) * maxCalories;
	const protein = 0.8 * userDetails.weight;
	const saturatedFat = 22;
	let carbohydrates = 0;
	if (userDetails.gender == 'male') {
		carbohydrates = 225;
	} else {
		carbohydrates = 275;
	}

	const allmaxValues = {
		calories: maxCalories,
		fat: fat,
		sugar: sugar,
		salt: salt,
		protein: protein,
		carbohydrates: carbohydrates,
		saturatedFat: saturatedFat
	};
	return allmaxValues;

	// Salz 6 g pro Tag
	// Fett 65g bei 2000 kcal pro Tag
	// Zucker 50 g bei 2000 kcal pro Tag
	// Protein ca. 75 Gramm 0,8 g/kg Körpergewicht
	// Kohlenhydrate 200 g pro Tag
	// gesättigte Fettsäuren 22 g pro Tag
}
