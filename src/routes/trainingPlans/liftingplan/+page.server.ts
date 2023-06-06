import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
const response = await prisma.trainingPlan.findMany({
    include: {
        sessionTemplates: {
            include: {
                exerciseTemplates: true
            }
        } 
    }
})
return { feed: response };
}) satisfies PageServerLoad;