import React from 'react'
import styles from './.module.scss'
import { BiUser } from 'react-icons/bi'
import { MdWorkOutline } from 'react-icons/md'

const ReviewCard = ({
  name,
  job,
  opinion
}) => {
  return (
    <div className={`${styles.card} card`}>
      <div className={styles.user__details}>
        <span className={styles.user__image}>
          {name[0]}
        </span>
        <div className={styles.user__data}>
          <div className={styles.user__name}><BiUser className={styles.icon} />{name}</div>
          <div className={styles.user__job}><MdWorkOutline className={styles.icon} />{job}</div>
        </div>
      </div>
      <p className={styles.opinion}>{opinion}</p>
    </div>
  )
}

export default ReviewCard