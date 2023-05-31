import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    // 1.
    default: async ({ request }) => {
        const data = await request.formData();

        const email = data.get("email")
        const username = data.get("username")
        const userDetailsId = data.get("userDetailsId")
        const foodDiaryId = data.get("foodDiaryId")

        // 2.
        if (!email || !username || !userDetailsId || !foodDiaryId) {
            return fail(400, { email, username, missing: true });
        }

        // 3.
        if (typeof email != "string" || typeof username != "string" || typeof userDetailsId != "number" || typeof foodDiaryId != "number") {
            return fail(400, { incorrect: true })
        }

        // 4.
        await prisma.user.create({
            data: {
                email,
                username,
                userDetails: { connect: { userId: userDetailsId } },
                foodDiary: { connect: { id: foodDiaryId } }
            },
        });

        //5.
        throw redirect(303, `/`)
    }
} satisfies Actions;