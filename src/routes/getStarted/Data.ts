import { writable } from 'svelte/store';

export const getStartedData = writable([
	{ title: 'Ziele', link: '/getStarted/goals', value: '' },
	{ title: 'Körpergröße', link: '/getStarted/size', value: '' },
	{ title: 'Gewicht', link: '/getStarted/weight', value: '' },
	{ title: 'Geburtsdatum', link: '/getStarted/dob', value: '' },
	{ title: 'Aktivitätslevel', link: '/getStarted/level', value: '' }
]);
