import prisma from '$lib/prisma';
import { cardiodistance } from '../../stores/Data';

export async function POST({ locals }) {
	console.log(cardiodistance);
	let cDistance = '';
	cardiodistance.subscribe((value) => {
		cDistance = value;
	});
	console.log(cDistance);

	const localSession = await locals.getSession();
	const userEmail = localSession?.user?.email ?? '';

	const user = await prisma.user.findUnique({
		where: {
			email: userEmail
		}
	});

	const session = await prisma.session.create({
		data: {
			userId: user?.id ?? 0,
			date: new Date()
		}
	});
	const exerciseTemplate = await prisma.exerciseTemplate.findMany({
		where: {
			title: 'Bankdrücken stehend'
		}
	});
	const exercise = await prisma.exercise.create({
		data: {
			session: {
				connect: {
					id: session.id
				}
			},
			exerciseTemplate: {
				connect: {
					id: exerciseTemplate.id
				}
			}
		}
	});

	await prisma.liftingExercisePerformance.create({
		data: {
			repetitions: 10,
			weight: 100,
			exercise: {
				connect: {
					id: exercise.id
				}
			}
		}
	});
	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
