import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	const email = session?.user?.email;

	interface GroupedLiftingData {
		[name: string]: {
			name: string;
			event: {
				date: Date;
				weight: number;
				reps: number;
			}[];
		};
	}

	const liftingExercisePerformanceResponse = await prisma.liftingExercisePerformance.findMany({
		include: {
			exercise: {
				include: {
					session: {
						include: {
							userDetails: {
								include: {
									user: true
								}
							}
						}
					},
					exerciseTemplate: true
				}
			}
		}
	});

	const liftingExercisePerformanceData = liftingExercisePerformanceResponse
		.filter((performance) => performance.exercise.session.userDetails.user.email === email)
		.map((performance) => ({
			name: performance.exercise.exerciseTemplate.title,
			date: performance.exercise.session.date,
			weight: performance.weight,
			reps: performance.repetitions
		}));

	// Group the data by the "name" property
	const groupedLiftingData = liftingExercisePerformanceData.reduce(
		(acc: GroupedLiftingData, obj) => {
			const groupName = obj.name;
			if (!acc[groupName]) {
				acc[groupName] = {
					name: groupName,
					event: []
				};
			}
			acc[groupName].event.push({
				date: obj.date,
				weight: obj.weight,
				reps: obj.reps
			});
			return acc;
		},
		{}
	);

	// Convert the grouped data object to an array
	const groupedLiftingDataResult = Object.values(groupedLiftingData);

	interface GroupedCardioData {
		[name: string]: {
			name: string;
			event: {
				date: Date;
				distance: number;
				time: number;
			}[];
		};
	}

	const cardioExercisePerformanceResponse = await prisma.cardioExercisePerformance.findMany({
		include: {
			exercise: {
				include: {
					session: true,
					exerciseTemplate: true
				}
			}
		}
	});
	const cardioExercisePerformanceData = cardioExercisePerformanceResponse.map((performance) => ({
		name: performance.exercise.exerciseTemplate.title,
		date: performance.exercise.session.date,
		distance: performance.distance,
		time: performance.time
	}));

	// Group the data by the "name" property
	const groupedCardioData = cardioExercisePerformanceData.reduce((acc: GroupedCardioData, obj) => {
		const groupName = obj.name;
		if (!acc[groupName]) {
			acc[groupName] = {
				name: groupName,
				event: []
			};
		}
		acc[groupName].event.push({
			date: obj.date,
			distance: obj.distance,
			time: obj.time
		});
		return acc;
	}, {});

	// Convert the grouped data object to an array
	const groupedCardioDataResult = Object.values(groupedCardioData);

	return {
		liftingExercisePerformances: groupedLiftingDataResult,
		cardioExercisePerformances: groupedCardioDataResult
	};
}) satisfies PageServerLoad;
