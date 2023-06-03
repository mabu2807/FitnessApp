import { PrismaClient } from '@prisma/client'
import userData from "../src/lib/testdata/user.json" assert { type: "json" }

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  for (const user of userData) {
    const createdUser = await prisma.user.create({
      data: {
        email: user.email,
        username: user.username,
        password: user.password
      }
    })
    console.log(`Created user with id: ${createdUser.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })