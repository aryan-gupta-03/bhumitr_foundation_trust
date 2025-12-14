import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Seed Impact Stats
  const stats = [
    { label: 'Meals Served', value: '10,000+', icon: 'Utensils', order: 1 },
    { label: 'Clothes Distributed', value: '5,000+', icon: 'Shirt', order: 2 },
    { label: 'Students Helped', value: '2,500+', icon: 'BookOpen', order: 3 },
    { label: 'Drives Completed', value: '100+', icon: 'Users', order: 4 },
  ]

  for (const stat of stats) {
    await prisma.impactStat.upsert({
      where: { id: stat.label },
      update: stat,
      create: {
        id: stat.label,
        ...stat,
      },
    })
  }

  console.log('✅ Impact stats seeded')

  // Seed Sample Drives
  const sampleDrives = [
    {
      title: 'Winter Clothing Drive',
      description: 'Collecting warm clothes for families in need this winter season.',
      date: new Date('2024-12-20'),
      location: 'Jammu City Center',
      category: 'CLOTHING' as const,
      status: 'UPCOMING' as const,
    },
    {
      title: 'Education Kit Distribution',
      description: 'Distributing books and stationery to underprivileged students.',
      date: new Date('2024-12-25'),
      location: 'Multiple Locations',
      category: 'EDUCATION' as const,
      status: 'UPCOMING' as const,
    },
  ]

  for (const drive of sampleDrives) {
    await prisma.drive.upsert({
      where: { id: drive.title },
      update: drive,
      create: {
        id: drive.title,
        ...drive,
      },
    })
  }

  console.log('✅ Sample drives seeded')
  console.log('Database seeding completed!')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

