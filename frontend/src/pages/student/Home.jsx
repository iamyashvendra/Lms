import React from 'react'
import Hero from '../../componnents/student/Hero'
import Companies from '../../componnents/student/Companies'
import CoursesSection from '../../componnents/student/CourseSection'
import TestimonialsSection from '../../componnents/student/TestimonialsSection'
import CallToAction from '../../componnents/student/CallToAction'
import Footer from '../../componnents/student/Footer'

const Home = () => {
  return (
    <div>
        <div className='flex flex-col item-center space-y-7 text-center'>
          <Hero />
          <Companies />
          <CoursesSection />
          <TestimonialsSection />
          <CallToAction />
          <Footer />
        </div>
    </div>
  )
}

export default Home