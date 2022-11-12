import React, { useEffect } from 'react'
import styles from './.module.scss'
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from 'react-icons/fa'
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div data-aos="fade-up" className={styles.footer__row}>
          <a className='email' href="mailto:malek@leagueofva.com"><HiOutlineMail />malek@leagueofva.com</a>
        </div>
        <div data-aos="fade-up" data-aos-delay='150' className={styles.footer__row}>
          <HiLocationMarker />
          <p className='location'>Hurghada, Egypt</p>
        </div>  
        <div className={`${styles.socials} d-flex align-items-center justify-content-center`}>
          <div data-aos='fade-up' data-aos-delay='100'>
            <a className={styles.social__btn} target='_blank' href="https://www.facebook.com/LeagueOfVAs" rel="noreferrer"><FaFacebookF /></a>
          </div>
          <div data-aos='fade-up' data-aos-delay='150'>
            <a className={styles.social__btn} target='_blank' href="https://twitter.com/league_as" rel="noreferrer"><FaTwitter /></a>
          </div>
          <div data-aos='fade-up' data-aos-delay='200'>
            <a className={styles.social__btn} target='_blank' href="https://www.pinterest.com/Leagueofva/" rel="noreferrer"><FaPinterestP /></a>
          </div>
          <div data-aos='fade-up' data-aos-delay='250'>
            <a className={styles.social__btn} target='_blank' href="https://www.linkedin.com/in/malekfattah/" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <p className={`${styles.copyright} text-center`}>© Copyright 2020 |  All Rights Reserved <br/>Powered by Omar Abd Elrhman</p>
    </footer>
  )
}

export default Footer