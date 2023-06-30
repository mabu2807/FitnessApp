import prisma from '$lib/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
          token: params.token,
        },
      })
    
    const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          verified: true,
        },
      })

    return updatedUser;
}