
import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
const response = await prisma.user.findMany()
  console.log(response)

// 2.

console.log(typeof(response))
return {response};
}) satisfies PageServerLoad;
