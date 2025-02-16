import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import PropertiesSection from '@/components/PropertiesSection'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

const page = () => {
  return (
    <div className='font-sans'>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <CTASection/>
      <PropertiesSection/>
      <ContactSection/>
    </div>
  )
}

export default page