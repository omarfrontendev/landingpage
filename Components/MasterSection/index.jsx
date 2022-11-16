/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './.module.scss'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

const MasterSection = () => {
  return (
    <section className={`${styles.section} section__spaces`}>
      <div className="container">
        <div className={styles.section__content}>
          <blockquote  className={styles.ph}><span>"</span>Master your strength, outsource your weaknesses<span>"</span></blockquote>
          <span className={styles.auther}><HiChevronDoubleRight className={styles.icon} /> Ryan Khan <HiChevronDoubleLeft className={styles.icon} /></span>
        </div>
      </div>
    </section>
  )
}

export default MasterSection