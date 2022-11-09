/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './.module.scss'
import { MdOutlineExpandMore } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

const ServiceCard = ({ label, img, desc }) => {

  const [showAll, setShowAll] = useState(false);

  return (
    <motion.div className={`${styles.service__card} d-flex`}>
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
            animate={{height: showAll ? 'auto' : '70px'}}
            transition={{type:'linear'}}
            className={`${styles.service__desc} ${showAll ? styles.show : styles.hide}`}
            >
            {desc}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard