export function initChartData(allCalories: number, calperday: number[]) {
	const bgColors = changeBgColors(allCalories, calperday);
	const week = calcWeekArray();
	const borderColor = changeBorderColors(allCalories, calperday);
	const data = {
		labels: week,
		datasets: [
			{
				label: 'kcal',
				data: calperday,
				backgroundColor: bgColors,
				borderWidth: 1,
				borderColor: borderColor
			}
		]
	};
	console.log(data);
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

	let weekday = day.getDay() + 1;
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

function changeBgColors(allCalories: number, calperday: number[]) {
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
		if (calperday[i] > Number(allCalories)) {
			backgroundColor[i] = red;
		}
	}
	return backgroundColor;
}
function changeBorderColors(allCalories: number, calperday: number[]) {
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
		if (calperday[i] > Number(allCalories)) {
			borderColor[i] = red;
		}
	}
	return borderColor;
}
