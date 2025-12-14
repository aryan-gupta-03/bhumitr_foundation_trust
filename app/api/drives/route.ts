import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const driveSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  date: z.string(),
  location: z.string(),
  category: z.enum(['FOOD', 'CLOTHING', 'EDUCATION', 'RELIEF', 'EVENT', 'OTHER']),
  images: z.array(z.string()).optional(),
  status: z.enum(['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED']).optional(),
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const category = searchParams.get('category')

    const drives = await prisma.drive.findMany({
      where: {
        ...(status && { status: status as any }),
        ...(category && { category: category as any }),
      },
      orderBy: { date: 'desc' },
    })

    return NextResponse.json({ drives })
  } catch (error) {
    console.error('Error fetching drives:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = driveSchema.parse(body)

    const drive = await prisma.drive.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        date: new Date(validatedData.date),
        location: validatedData.location,
        category: validatedData.category,
        images: validatedData.images || [],
        status: validatedData.status || 'UPCOMING',
      },
    })

    return NextResponse.json(
      { message: 'Drive created successfully', drive },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating drive:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

