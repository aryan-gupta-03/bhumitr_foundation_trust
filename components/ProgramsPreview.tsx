'use client'

import Link from 'next/link'
import { Utensils, Shirt, BookOpen, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import ProgramCard from './ProgramCard'

const programs = [
  {
    id: 'food',
    title: 'Food Donation Drives',
    description: 'Regular breakfast and meal distribution for daily wage workers and underserved communities. Serving 600+ plates at recent drives.',
    icon: Utensils,
    color: 'bg-orange-100 text-orange-600',
    href: '/programs#food',
  },
  {
    id: 'clothing',
    title: 'Clothing Donation Drives',
    description: 'Collecting and distributing winter clothes and essentials for families in need. Your clothes can empower someone today.',
    icon: Shirt,
    color: 'bg-blue-100 text-blue-600',
    href: '/programs#clothing',
  },
  {
    id: 'education',
    title: 'Education Support & Student Aid',
    description: 'Providing books, notebooks, and school materials to students, especially in flood-affected zones.',
    icon: BookOpen,
    color: 'bg-green-100 text-green-600',
    href: '/programs#education',
  },
  {
    id: 'events',
    title: 'Special Campaigns & Events',
    description: 'Children\'s Day celebrations, flood relief camps, and emergency aid initiatives when communities need us most.',
    icon: Heart,
    color: 'bg-purple-100 text-purple-600',
    href: '/programs#events',
  },
]

export default function ProgramsPreview() {
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
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Making a difference through focused initiatives that address real community needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Programs</span>
            <Heart className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

