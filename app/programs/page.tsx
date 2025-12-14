import { Utensils, Shirt, BookOpen, Heart, Calendar, MapPin } from 'lucide-react'
import ProgramCard from '@/components/ProgramCard'

const programs = [
  {
    id: 'food',
    title: 'Food Donation Drives',
    description: 'Regular breakfast and meal distribution for daily wage workers and underserved communities. Our volunteers serve hundreds of nutritious meals at each drive, bringing hope and sustenance to those who need it most. Recent highlights include serving 600+ plates of breakfast at a single drive, demonstrating the power of community action.',
    icon: Utensils,
    color: 'bg-orange-100 text-orange-600',
    href: '/programs#food',
    details: [
      'Regular breakfast distribution',
      'Meal drives for underserved communities',
      'Support for daily wage workers',
      'Community kitchen initiatives',
    ],
  },
  {
    id: 'clothing',
    title: 'Clothing Donation Drives',
    description: 'Collecting and distributing winter clothes and essentials for families in need. Your donated clothes can empower someone today. We organize seasonal drives to ensure families have adequate clothing throughout the year, especially during harsh winter months.',
    icon: Shirt,
    color: 'bg-blue-100 text-blue-600',
    href: '/programs#clothing',
    details: [
      'Winter clothing collection',
      'Distribution to families in need',
      'Seasonal drives',
      'Accepting donations year-round',
    ],
  },
  {
    id: 'education',
    title: 'Education Support & Student Aid',
    description: 'Providing books, notebooks, and school materials to students, especially in flood-affected zones. Education is the key to breaking the cycle of poverty, and we ensure every child has access to the tools they need to succeed.',
    icon: BookOpen,
    color: 'bg-green-100 text-green-600',
    href: '/programs#education',
    details: [
      'Book and notebook distribution',
      'School supply kits',
      'Support for flood-affected students',
      'Scholarship assistance programs',
    ],
  },
  {
    id: 'events',
    title: 'Special Campaigns & Events',
    description: 'Children\'s Day celebrations, flood relief camps, and emergency aid initiatives when communities need us most. We organize special events to bring joy, hope, and immediate relief to those facing difficult circumstances.',
    icon: Heart,
    color: 'bg-purple-100 text-purple-600',
    href: '/programs#events',
    details: [
      'Children\'s Day celebrations',
      'Flood relief camps',
      'Emergency aid distribution',
      'Community outreach events',
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-primary-100">
              Making a difference through focused initiatives that address real community needs
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {programs.map((program) => {
              const Icon = program.icon
              return (
                <div key={program.id} id={program.id} className="scroll-mt-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${program.color} mb-6`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
                      <p className="text-lg text-gray-700 mb-6">{program.description}</p>
                      <ul className="space-y-3">
                        {program.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <Heart className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                      <Icon className="h-24 w-24 text-gray-400" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Want to Support Our Programs?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your contribution helps us continue these vital programs and reach more people in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="btn-primary">
              Donate Now
            </a>
            <a href="/volunteer" className="btn-secondary">
              Join as Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

