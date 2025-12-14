'use client'

import { Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            See our latest activities, drives, and impact stories on Instagram.
          </p>
          <a
            href="https://www.instagram.com/bhumitr_foundation_trust03/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <Instagram className="h-5 w-5" />
            <span>@bhumitr_foundation_trust03</span>
          </a>
        </motion.div>

        {/* Instagram Feed Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Instagram className="h-12 w-12" />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Note: Instagram feed integration requires Instagram API setup. 
            For now, visit our{' '}
            <a
              href="https://www.instagram.com/bhumitr_foundation_trust03/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              Instagram page
            </a>{' '}
            to see our latest posts.
          </p>
        </div>
      </div>
    </section>
  )
}

