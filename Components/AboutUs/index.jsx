import React, { useContext, useEffect, useRef } from 'react'
import styles from './.module.scss'
import AppContext from '../../store/app-context';
import Aos from 'aos';
import "aos/dist/aos.css";

const AboutUs = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const ctx = useContext(AppContext);
  const aboutSection = useRef(null)
  useEffect(() => {
    ctx.setAboutOffset(aboutSection.current.offsetTop)
  }, [ctx]);

  const data = [
    {
      id: 1,
      title: 'OUR HISTORY',
      desc: [
        'League of Virtual Assistants (LOVA) was founded early 2019. Our founder, Malek Fattah, has been in the Virtual assistance & customer service industries for over 10 years. Giving him the experience and skill set required to create and manage our team.',
        'Currently operating with over 20 active members servicing more than 15 satisfied clients, and many more previous clients who left us with a smile on their face.',
        'The agency consists of a very versatile and cooperative team, with an aim on client satisfaction. Our top priority is completing your task, without hassle and within the required time.',
        'LOVA is an ever expanding VA Agency, based all over Egypt exclusively (all members are Egyptian nationalists). We seek to provide the top quality VA services worldwide.'
      ],
      fade: 'up'
    },
    {
      id: 2,
      title: "OUR MISSION",
      desc: [
        'Our mission is to help starting entrepreneurs and small business owners grow & scale their business.',
        'We strive to provide seamless day to day services and make our client’s days as smooth as possible, to take care of the clutter, the routine, and the time consuming tasks.',
        'To reach the goal of letting them focus on what really matters, and leaving the rest to us.'
      ],
      fade: 'right'
    },
    {
      id: 3,
      title: 'OUR VISION',
      desc: [
        'Our vision is to become the go-to destination for the top quality virtual assistance services from Egypt, and worldwide.',
        'To our knowledge, so far we are the only Egyptian VA agency currently operational, and once there is competition, we will remain in the top spot.'
      ],
      fade: 'left'
    }
  ];

  return (
    <section ref={aboutSection} className={`${styles.section} about-us-section`}>
      <div className={`${styles.content} container position-relative`}>
        <h2 data-aos="fade-up" id='about__us' className='section__title'><span>About Us</span></h2>
        <div className={styles.about__boxes}>
          {data.map(box => (
            <div data-aos={`fade-${box.fade}`} key={box.id} className={styles.box}>
              <h4 className={styles.title}>{box.title}</h4>
              {box.desc.map((p, i) => (
                <p key={i} className={styles.box__desc}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs