/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useRef } from 'react';
import styles from './.module.scss'
import Aos from 'aos';
import "aos/dist/aos.css";
import AppContext from '../../store/app-context';

const VirtualAssistant = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const ctx = useContext(AppContext);
  const virtualSection = useRef(null);

  useEffect(() => {
    ctx.setVirtualOffset(virtualSection.current.offsetTop);
  }, [ctx])


  return (
    <div className="container" ref={virtualSection} id='virtual__assistance'>
      <section className={`${styles.assistant__section} section__spaces`}>
        <h2 data-aos="fade-up" className='section__title'><span>Virtual Assistance Services</span></h2>
        <div className={`${styles.assistant__content} d-flex align-items-center justigy-content-center`}>
          <p data-aos="fade-left" className={styles.assistant__desc}>A Virtual Assistant, is the secret weapon of successful people. Not just in business, but in life. We give you more time to focus on what really matters in your business, by taking care of the little details. Stuff like scheduling meetings, paying bills, and booking travel. As a LOVA client, you get your very own Virtual Assistant (VA) — a smart, intuitive, & reliable person who works remotely as an extra brain & set of hands. You assign a task and your VA is on it.</p>
          <div data-aos="fade-right" className={`${styles.assistant__img} d-flex align-items-center justify-content-center`}>
            <div style={{overflow: 'hidden'}}>
              <img src="/assets/chess.jpg" alt="assistant__image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VirtualAssistant