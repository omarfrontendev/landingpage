import React from 'react'
import { ToastContainer } from 'react-toastify';
import { 
  AboutUs,
  ContactUs, 
  Header, 
  Hero, 
  MasterSection, 
  ServicesSection, 
  Team, 
  Testimonials, 
  VirtualAssistant,
  Footer,  
  Pagination
} from '../Components'
import AppProvider from '../store/AppProvider'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <VirtualAssistant />
      <ServicesSection />
      <Testimonials />
      <Team />
      <MasterSection />
      {/* <BookSection /> */}
      <AboutUs />
      <ContactUs />
      <Footer />
      <Pagination />
      <ToastContainer  />
    </AppProvider>
  )
}

export default Home