import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../store/app-context';
import styles from './.module.scss'
import Aos from 'aos';
import "aos/dist/aos.css";

const Pagination = () => {

  const [currentPagination, setCurrentPagination] = useState(1);
  const ctx = useContext(AppContext);

  const sections = [
    {
      id: 1,
      label: 'Home',
      href: '#'
    },
    {
      id: 2,
      label: 'Virtual Assistance Services',
      href: '#virtual__assistance'
    },
    {
      id: 3,
      label: 'Our Services',
      href: '#services'
    },
    {
      id: 4,
      label: 'Testimonials',
      href: '#testimonials'
    },
    {
      id: 5,
      label: 'Our Team',
      href: '#our__team'
    },
    {
      id: 6,
      label: 'About Us',
      href: '#about__us'
    },
    {
      id: 7,
      label: 'Contact Us',
      href: '#contact__us'
    }
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  useEffect(() => {

    const activePaginationHandler = () => {
      if(window.pageYOffset < ctx.virtualOffset) {
        setCurrentPagination(1);
      }
      if(ctx.virtualOffset < window.pageYOffset + 100) {
        setCurrentPagination(2);
      }
      if(ctx.serviceOffset < window.pageYOffset + 150) {
        setCurrentPagination(3);
      }
      if(ctx.testimonialsOffset < window.pageYOffset + 100) {
        setCurrentPagination(4)
      }
      if(ctx.teamOffset < window.pageYOffset + 100) {
        setCurrentPagination(5)
      }
      if(ctx.aboutOffset < window.pageYOffset) {
        setCurrentPagination(6)
      }
      if(ctx.contactOffset < window.pageYOffset + 150) {
        setCurrentPagination(7)
      }
      console.log(ctx.contactOffset)
    };

    window.addEventListener('scroll', activePaginationHandler);

    return () => window.removeEventListener('scroll', activePaginationHandler)

  }, [ctx.aboutOffset, ctx.contactOffset, ctx.serviceOffset, ctx.teamOffset, ctx.testimonialsOffset, ctx.virtualOffset])
  
  return (
    <ul className={styles.pagination__container}>
      {sections.map((section, i) => (
        <li data-aos='fade-left' data-aos-delay={`${i}00`}  key={section.id}>
          <a className={`${styles.single__pagination} ${currentPagination === section.id ? styles.active : ''}`} href={section.href}>
            <span className={styles.label}>{section.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination