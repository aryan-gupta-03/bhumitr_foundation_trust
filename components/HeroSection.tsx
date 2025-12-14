'use client'

import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Serving Humanity
              <br />
              <span className="text-primary-100">Empowering Youth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              Supporting Communities in Jammu
            </p>
            <p className="text-lg mb-10 text-primary-100 max-w-2xl mx-auto">
              Together for Better Futures in Jammu. Join us in making a difference through food drives, 
              clothing donations, education support, and community outreach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/donate"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Donate Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/volunteer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>Join as Volunteer</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}

