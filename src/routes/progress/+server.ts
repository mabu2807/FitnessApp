import prisma from '$lib/prisma';
import { weightData } from '../../stores/Data';

export async function POST() {
    weightData.subscribe(data => {
        console.log(data);
    });

    const session = await prisma.session.create({
        data: {
            userId: 1,
            date: new Date(),
        }
    });
    const exerciseTemplate = await prisma.exerciseTemplate.findFirstOrThrow({
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
    })

}