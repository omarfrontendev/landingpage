/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './.module.scss'
import { MdOutlineExpandMore } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import Aos from 'aos';
import "aos/dist/aos.css";

const ServiceCard = ({ label, img, desc, i }) => {

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if(i === 0 || i === 1) {
      setShowAll(true);
    }
    Aos.init({ duration: 1000 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div data-aos='fade-up' className={`${styles.service__card} d-flex`}>
      <button 
        className={`${styles.show__btn} ${showAll ? styles.show : ''}`}
        onClick={() => setShowAll(prev => !prev)}
      >
        <MdOutlineExpandMore />
      </button>
      <div className={styles.service__img}>
        <img src={img} alt="" />
        <h3 className={styles.service__label}>{label}</h3>
      </div>
      <motion.div className={styles.service__details}>
        <AnimatePresence>
          <motion.p
            // layout
            animate={{height: showAll ? 'auto' : '70px'}}
            transition={{type:'linear'}}
            className={`${styles.service__desc} ${showAll ? styles.show : styles.hide}`}
            >
            {desc.map((p, i) => {
              if(desc.length === 1) {
                return (
                  <React.Fragment
                    key={i}
                  >
                    {p}
                  </React.Fragment>
                )
              }else {
                return (
                  <React.Fragment
                    key={i}
                  >
                    {p} {i !== desc.length - 1 && <br className={styles.break__line} />}
                  </React.Fragment>
                )
              }
            }
            )}
            
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard