import { Heart, Target, Eye, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bhumitr Foundation Trust</h1>
            <p className="text-xl text-primary-100">
              Started with the heart; growing with purpose
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Bhumitr Foundation Trust is a registered non-profit organization dedicated to 
                uplifting underprivileged communities in Jammu and surrounding areas. We work 
                tirelessly to provide food, clothing, educational support, and emergency relief 
                to those who need it most.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey began with a simple belief: that every act of kindness, no matter 
                how small, can create a ripple effect of positive change. Today, we're proud 
                to have served thousands of meals, distributed essential supplies, and supported 
                hundreds of students in their educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To uplift underprivileged communities by providing food, clothing, educational 
                support, and relief efforts — one life at a time. We believe in creating 
                sustainable impact through community engagement and compassionate action.
              </p>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A Jammu where every individual has access to basic necessities, quality 
                education, and opportunities to thrive. We envision a community where 
                compassion and support are the foundation of social progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why It Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hunger & Nutrition</h3>
                <p className="text-gray-700">
                  Many families struggle to put food on the table. Our food drives ensure that 
                  daily wage workers and underserved communities receive nutritious meals, 
                  bringing hope and sustenance to those in need.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clothing & Basic Needs</h3>
                <p className="text-gray-700">
                  Winter months can be harsh, especially for families without adequate clothing. 
                  Our clothing drives provide warmth and dignity to those who need it most.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Support</h3>
                <p className="text-gray-700">
                  Education is the key to breaking the cycle of poverty. We provide books, 
                  notebooks, and school supplies to students, ensuring they have the tools 
                  they need to succeed.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Relief</h3>
                <p className="text-gray-700">
                  When disasters strike or communities face crises, we're there to provide 
                  immediate relief and support, helping families get back on their feet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Circle of Volunteers
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Give your time, make real change. Together, we can create a better future for Jammu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/volunteer" className="btn-secondary bg-white text-primary-600">
              Become a Volunteer
            </a>
            <a href="/donate" className="btn-secondary bg-transparent border-white text-white">
              Support Our Cause
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

