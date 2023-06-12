import type { PageServerLoad, Actions } from './$types';
import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';




export const load = (async () => {
    let responseArticle;

    try {
        responseArticle = await prisma.nutritionTippsArticels.findMany()
    } catch (error) {
        return fail(404, {message: "No article found"})        
    }

    

    console.log(responseArticle)
    return {articles: responseArticle}
    
}) satisfies PageServerLoad;


 export const actions: Actions = {
    default: async (event) => {
        console.log("Test")
    }
    
}satisfies Actions;