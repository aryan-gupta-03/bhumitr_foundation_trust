import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const updateDriveSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  date: z.string().optional(),
  location: z.string().optional(),
  category: z.enum(['FOOD', 'CLOTHING', 'EDUCATION', 'RELIEF', 'EVENT', 'OTHER']).optional(),
  images: z.array(z.string()).optional(),
  status: z.enum(['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED']).optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const drive = await prisma.drive.findUnique({
      where: { id: params.id },
    })

    if (!drive) {
      return NextResponse.json(
        { error: 'Drive not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ drive })
  } catch (error) {
    console.error('Error fetching drive:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const validatedData = updateDriveSchema.parse(body)

    const updateData: any = {}
    if (validatedData.title) updateData.title = validatedData.title
    if (validatedData.description) updateData.description = validatedData.description
    if (validatedData.date) updateData.date = new Date(validatedData.date)
    if (validatedData.location) updateData.location = validatedData.location
    if (validatedData.category) updateData.category = validatedData.category
    if (validatedData.images) updateData.images = validatedData.images
    if (validatedData.status) updateData.status = validatedData.status

    const drive = await prisma.drive.update({
      where: { id: params.id },
      data: updateData,
    })

    return NextResponse.json({ message: 'Drive updated successfully', drive })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error updating drive:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.drive.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Drive deleted successfully' })
  } catch (error) {
    console.error('Error deleting drive:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

