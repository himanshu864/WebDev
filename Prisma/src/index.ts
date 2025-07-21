import { prisma } from './lib/prisma'

async function main() {
  await prisma.category.deleteMany()
  await prisma.post.deleteMany()
  await prisma.userPreferences.deleteMany()
  await prisma.user.deleteMany()

  await prisma.user.create({
    data: {
      email: 'himanshu@gmail.com',
      age: 21,
      name: 'Himanshu',
    },
  })

  const newUser = await prisma.user.create({
    data: {
      email: 'rishav@gmail.com',
      age: 21,
      name: 'Rishav',
      preference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    include: {
      preference: true,
    },
  })

  console.log(newUser)

  const allUsers = await prisma.user.findMany()
  console.log('All users: ')
  console.dir(allUsers, { depth: null })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
