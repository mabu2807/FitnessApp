import { writable } from 'svelte/store';

export const testData = writable(0);

export const getStartedData = writable([
	{ title: 'Ziele', value: '' },
	{ title: 'Körpergröße', value: 180 },
	{ title: 'Gewicht', value: 90 },
	{ title: 'Geburtsdatum', value: '' },
	{ title: 'Geschlecht', value: '' },
	{ title: 'Aktivitätslevel', value: 'Solide' },
	{ title: 'userName', value: '' },
	{ title: 'eMail', value: '' },
	{ title: 'password', value: '' }
]);

export const weightData = writable([
	{ title: 'Bankdrücken stehend', weight: '', rep: '', date: '' },
	{ title: 'Latzug springend', weight: '', rep: '', date: '' },
	{ title: 'Kniebeuge aufm Tisch', weight: '', rep: '', date: '' },
	{ title: 'Curls mit Wasserkästen', weight: '', rep: '', date: '' }
]);

export const cardioData = writable({ title: '', distance: '', time: '', date: '' });
export const cardioTitle = writable('');
export const cardiodistance = writable('');
export const cardiotime = writable('');
export const sessiondate = writable('');

export const lockedGoal = writable(true);

export const lockedGender = writable(true);

export const selectedCategory = writable('');

export const categoryData = writable([
	{
		title: 'Krafttraining',
		imageSrc: 'workout2.jpg',
		description:
			' Sed do eiusmod temporrem ipsum dolor sit ametorididunt ut labore et dolore magna aliqua. ',
		link: 'liftingplan',
		selected: false,
		picked: true
	},
	{
		title: 'Cardio',
		imageSrc: 'workout1.jpg',
		description:
			' labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqu',
		link: 'https://example.com/button2',
		selected: false,
		picked: false
	},
	{
		title: 'Yoga',
		imageSrc: 'workout3.jpg',
		description:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. minim veniam, quis nostrud exercita',
		link: 'https://example.com/button3',
		selected: false,
		picked: true
	}
]);

export function updateCategoryData(newData: any) {
	categoryData.set(newData);
}
