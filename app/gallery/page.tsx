'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { googleDriveConfig } from '@/lib/config'

// Helper function to convert Google Drive file ID to direct view URL
const getDriveImageUrl = (fileId: string) => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null)

  // Use images from config, or fallback to placeholder
  const galleryImages = googleDriveConfig.galleryImages.length > 0
    ? googleDriveConfig.galleryImages.map((img) => ({
        id: img.id,
        url: getDriveImageUrl(img.driveId),
        caption: img.caption,
      }))
    : [
        { id: '1', url: '/placeholder-1.jpg', caption: 'Food distribution drive' },
        { id: '2', url: '/placeholder-2.jpg', caption: 'Clothing donation event' },
        { id: '3', url: '/placeholder-3.jpg', caption: 'Education kit distribution' },
        { id: '4', url: '/placeholder-4.jpg', caption: 'Children\'s Day celebration' },
        { id: '5', url: '/placeholder-5.jpg', caption: 'Volunteers in action' },
        { id: '6', url: '/placeholder-6.jpg', caption: 'Flood relief camp' },
      ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-primary-100">
              Moments of impact, hope, and community spirit
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity group"
                onClick={() => setSelectedImage({ url: image.url, caption: image.caption })}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400"><span class="text-sm">${image.caption}</span></div>`
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end pointer-events-none">
                  <p className="text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Follow us on{' '}
              <a
                href="https://www.instagram.com/bhumitr_foundation_trust03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline font-semibold"
              >
                Instagram
              </a>{' '}
              for the latest updates and photos from our drives.
            </p>
            <p className="text-sm text-gray-500">
              To add images: Update the <code className="bg-gray-100 px-2 py-1 rounded">googleDriveConfig</code> in <code className="bg-gray-100 px-2 py-1 rounded">lib/config.ts</code>
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl max-h-full text-center">
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-full max-h-[85vh] object-contain rounded-lg mb-4"
            />
            <p className="text-white text-lg">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}
