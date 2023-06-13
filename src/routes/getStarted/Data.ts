import { writable } from 'svelte/store';

export const getStartedData = writable([
	{ title: 'Ziele', value: '' },
	{ title: 'Körpergröße', value: '' },
	{ title: 'Gewicht', value: '' },
	{ title: 'Geburtsdatum', value: '' },
	{ title: 'Geschlecht', value: ''},
	{ title: 'Aktivitätslevel', value: '' }
]);

export const lockedGoal = writable(true);

export const lockedGender = writable(true);
