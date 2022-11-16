import React, { useEffect, useState } from 'react'
import styles from './.module.scss'
import { FaArrowUp } from 'react-icons/fa'

const ButtonScrollToTop = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const windowScroll = () => {
      if(window.pageYOffset > 500) {
        setShow(true);
      }else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', windowScroll);
    return () => window.removeEventListener('scroll', windowScroll);
  }, [])

  return (
    <button className={`${styles.button} ${!show ? styles.hide : styles.show}`} onClick={() => window.scrollTo(0,0)}><FaArrowUp /></button>
  )
}

export default ButtonScrollToTop