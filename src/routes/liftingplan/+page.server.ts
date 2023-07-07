import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const trainingPlanResponse = await prisma.trainingPlan.findMany();
	const trainingPlanData = trainingPlanResponse.map((plan) => ({
		id: plan.id,
		name: plan.name,
		description: plan.description,
		image: "data:image/png;base64,"+(plan.image
			? Buffer.from(plan.image).toString("utf-8")
			: null),
		sportId: plan.sportId,
	}));

	const exerciseTemplateResponse = await prisma.exerciseTemplate.findMany();

	return { exerciceTemplates: exerciseTemplateResponse, trainingPlans: trainingPlanData };
}) satisfies PageServerLoad;
