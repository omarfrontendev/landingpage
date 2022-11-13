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
  Footer,  
  Pagination
} from '../Components'
import AppProvider from '../store/AppProvider'

const Home = () => {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <VirtualAssistant />
      {/* <OurWord /> */}
      <ServicesSection />
      <Testimonials />
      <Team />
      <MasterSection />
      {/* <BookSection /> */}
      <AboutUs />
      <ContactUs />
      <Footer />
      <Pagination />
    </AppProvider>
  )
}

export default Home