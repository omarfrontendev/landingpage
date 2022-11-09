/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './.module.scss'

const TeamCard = ({
  name,
  position,
  desc,
  img
}) => {
  return (
    <div className={styles.card}>
      <img src={img} className={styles.user__image} alt="Image" />
      <div className={styles.user__details}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.position}>{position}</span>
      </div>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}

export default TeamCard