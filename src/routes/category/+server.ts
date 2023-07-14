import prisma from '$lib/prisma';

export async function POST({ request, locals }) {    
    const session = await locals.getSession();
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email??''
        }
    });

    const requestJSON = await request.json();
    requestJSON.data.forEach(async (sport: number) => {
        await prisma.userSport.create({
            data: {
                userId: user?.id??0,
                sportId: sport,
                active: true,
                assignedAt: new Date(Date.now()),
            }
        });
    });

    return new Response(JSON.stringify({ success: true }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function DELETE({ request, locals }) {
    const session = await locals.getSession();
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email??''
        }
    });
    const userId = user?.id??0;

    const requestJSON = await request.json();
    console.log(requestJSON.data);
    requestJSON.data.forEach(async (sport: number) => {
        await prisma.userSport.delete({
            where: {
              userId_sportId: { userId, sportId: sport }
            }
        });
    });

    return new Response(JSON.stringify({ success: true }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}