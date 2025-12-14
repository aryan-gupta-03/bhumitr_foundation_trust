import { Heart, CheckCircle } from 'lucide-react'
import SimpleVolunteerForm from '@/components/SimpleVolunteerForm'

export default function VolunteerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join as Volunteer</h1>
            <p className="text-xl text-primary-100">
              Give your time, make real change. Together, we can create a better future for Jammu.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Volunteer With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="card">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Make Real Impact</h3>
                    <p className="text-gray-700 text-sm">
                      See the direct impact of your efforts on families and communities in need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Build Community</h3>
                    <p className="text-gray-700 text-sm">
                      Connect with like-minded individuals who share your passion for helping others.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Flexible Commitment</h3>
                    <p className="text-gray-700 text-sm">
                      Volunteer based on your availability and interests. Every contribution matters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Learn & Grow</h3>
                    <p className="text-gray-700 text-sm">
                      Gain valuable experience in community organizing and social impact work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Contact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="text-center mb-8">
                <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Join as Volunteer
                </h2>
                <p className="text-gray-600">
                  Get in touch with us and we'll get back to you soon!
                </p>
              </div>
              <SimpleVolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

