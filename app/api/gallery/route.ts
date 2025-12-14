import { NextRequest, NextResponse } from 'next/server'
import { prisma, isDatabaseAvailable } from '@/lib/prisma'
import { googleDriveConfig } from '@/lib/config'
import { z } from 'zod'

const gallerySchema = z.object({
  imageUrl: z.string().url(),
  caption: z.string().optional(),
  driveId: z.string().optional(),
})

// Helper to convert Google Drive file ID to direct view URL
const getDriveImageUrl = (fileIdOrUrl: string) => {
  if (fileIdOrUrl.includes('drive.google.com')) {
    const match = fileIdOrUrl.match(/[\/=]([a-zA-Z0-9_-]{25,})/)
    if (match) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`
    }
  }
  return `https://drive.google.com/uc?export=view&id=${fileIdOrUrl}`
}

export async function GET(request: NextRequest) {
  try {
    // If database is available, use it
    if (isDatabaseAvailable() && prisma) {
      const { searchParams } = new URL(request.url)
      const driveId = searchParams.get('driveId')

      const gallery = await prisma.gallery.findMany({
        where: driveId ? { driveId } : undefined,
        orderBy: { createdAt: 'desc' },
        include: {
          drive: true,
        },
      })

      return NextResponse.json({ gallery })
    }

    // Otherwise, use config file (for quick deployment without database)
    const gallery = googleDriveConfig.galleryImages.map((img) => ({
      id: img.id,
      imageUrl: getDriveImageUrl(img.driveId),
      caption: img.caption,
      driveId: null,
      createdAt: new Date().toISOString(),
    }))

    return NextResponse.json({ gallery })
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Only allow POST if database is available
    if (!isDatabaseAvailable() || !prisma) {
      return NextResponse.json(
        { error: 'Database not configured. Gallery items are managed via config file.' },
        { status: 501 }
      )
    }

    const body = await request.json()
    const validatedData = gallerySchema.parse(body)

    const galleryItem = await prisma.gallery.create({
      data: {
        imageUrl: validatedData.imageUrl,
        caption: validatedData.caption || null,
        driveId: validatedData.driveId || null,
      },
    })

    return NextResponse.json(
      { message: 'Gallery item added successfully', galleryItem },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error adding gallery item:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

