import React from 'react'
import { 
  BookSection, 
  ContactUs, 
  Header, 
  Hero, 
  MasterSection, 
  OurWord, 
  ServicesSection, 
  Team, 
  Testimonials, 
  VirtualAssistant 
} from '../Components'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <VirtualAssistant />
      <OurWord />
      <Testimonials />
      <ServicesSection />
      <MasterSection />
      <Team />
      {/* <BookSection /> */}
      <ContactUs />
      {/* <Footer /> */}
    </>
  )
}

export default Home