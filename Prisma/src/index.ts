import { prisma } from './lib/prisma'

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Rahul',
      email: 'rahul@gmail.com',
    },
  })

  console.log(newUser)

  const allUsers = await prisma.user.findMany()
  console.log('All users: ')
  console.dir(allUsers, { depth: null })
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
