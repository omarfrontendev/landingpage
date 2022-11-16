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
  Pagination,
  ButtonScrollToTop
} from '../Components'
import AppProvider from '../store/AppProvider'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div style={{overflow: 'hidden'}}>
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
        <ButtonScrollToTop />
        <ToastContainer  />
      </AppProvider>
    </div>
  )
}

export default Home