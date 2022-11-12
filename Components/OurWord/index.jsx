import React, { useEffect } from 'react'
import styles from './.module.scss'
import Aos from 'aos';
import "aos/dist/aos.css";

const OurWord = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    // <div className="container">
      <section className={`${styles.our__word}`}>
        <h2 data-aos="fade-up" className='section__title'><span>Don’t Take our word for it</span></h2>
        <div data-aos="zoom-in" className={`${styles.our__word__video} ratio ratio-16x9`}>
          <iframe src="https://www.youtube.com/embed/wZ1K802JBJs" title="YouTube video" allowFullScreen></iframe>
        </div>
      </section>
    // </div>
  )
}

export default OurWord;