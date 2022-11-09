import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/assets/logo.png"

import styles from './.module.scss'

const Header = () => {
  return (
    <div className={`${styles.header} d-flex align-items-center`}>
      <div className="container">
        <div className={`${styles.header__content} d-flex align-items-center justify-content-between`}>
          <Link href={'/'} className={styles.logo__container}>
            <Image src={Logo} alt="LOGO" className={styles.logo} />
          </Link>
          <ul className={`${styles.links__list} d-flex align-items-center justify-content-end`}>
            <li>
              <a className={`${styles.link} ${styles.active}`} href="#home">Home</a>
            </li>
            <li>
              <a className={styles.link} href="#services">Services</a>
            </li>
            <li>
              <a className={styles.link} href="#our__team">Our Team</a>
            </li>
            <li>
              <a className={styles.link} href="#about__us">About Us</a>
            </li>
            <li>
              <a className={styles.link} href="#contact__us">Contact US</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header