import React from 'react'
import { 
  AboutUs,
  ContactUs, 
  Header, 
  Hero, 
  MasterSection, 
  OurWord, 
  ServicesSection, 
  Team, 
  Testimonials, 
  VirtualAssistant,
  Footer  
} from '../Components'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <VirtualAssistant />
      <OurWord />
      <AboutUs />
      <ServicesSection />
      <Testimonials />
      <Team />
      <MasterSection />
      {/* <BookSection /> */}
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home