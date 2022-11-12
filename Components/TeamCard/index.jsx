/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styles from './.module.scss'
import Aos from 'aos';
import "aos/dist/aos.css";

const TeamCard = ({
  name,
  position,
  desc,
  img,
  index
}) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  
  return (
    <div className={styles.card} data-aos='fade-up' data-aos-delay={`${index}00`} >
      <img src={img} className={styles.user__image} alt="Image" />
      <div className={styles.user__details}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.position}>{position}</span>
      </div>
      <div className={styles.desc}>
        {desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}

export default TeamCard