import { writable } from 'svelte/store';

export const getStartedData = writable([
	{ title: 'Ziele', link: '/getStarted/goals', value: '' , unit:''},
	{ title: 'Körpergröße', link: '/getStarted/size', value: '', unit:' cm' },
	{ title: 'Gewicht', link: '/getStarted/weight', value: '', unit:' kg' },
	{ title: 'Geburtsdatum', link: '/getStarted/dob', value: '', unit:'' },
	{ title: 'Geschlecht', link: '/getStarted/gender', value: '', unit:''},
	{ title: 'Aktivitätslevel', link: '/getStarted/level', value: '', unit:'' }
]);
