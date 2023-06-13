import type { PageServerLoad, Actions } from './$types';
import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { Prisma } from '@prisma/client';




export const load = (async () => {
    let responseArticle;

    try {
        responseArticle = await prisma.nutritionTippsArticels.findMany()
    } catch (error) {
        return fail(404, {message: "No article found"})        
    }

    return {articles: responseArticle}
    
}) satisfies PageServerLoad;


 export const actions: Actions = {
    add: async (event) => {
            const time = "Breakfast"
            const day = new Date
            const dishId = 2
            const  foodID = 2

            const meal: Prisma.MealUncheckedCreateInput = {
                dishId: dishId,
                day: day,
                time: time,
                foodDiaryId: foodID 
            }
            try{
                await prisma.meal.create({
                    data: meal
                })

            }catch{
                return fail(404, {message: "Create new meal failed"})
            }
            
    }
    
}satisfies Actions;