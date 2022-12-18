import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/assets/logo.png";
import styles from "./.module.scss";
import Aos from "aos";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "aos/dist/aos.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <header className={`${styles.header} d-flex align-items-center`}>
      <div className="container">
        <div
          className={`${styles.header__content} d-flex align-items-center justify-content-between`}
        >
          <Link href={"/"} className={styles.logo__container}>
            <img src={Logo} alt="LOGO" className={styles.logo} />
          </Link>
          <ul
            className={`${styles.links__list} ${
              openMenu ? styles.opened : ""
            } d-flex align-items-center justify-content-end`}
          >
            <li onClick={() => setOpenMenu(false)}>
              <a className={`${styles.link} ${styles.active}`} href="#home">
                Home
              </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <a className={styles.link} href="#services">
                Services
              </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <a className={styles.link} href="#our__team">
                Our Team
              </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <a className={styles.link} href="#about__us">
                About Us
              </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <a className={styles.link} href="#contact__us">
                Contact US
              </a>
            </li>
            <button
              className={`d-block d-md-none ${styles.close__btn}`}
              onClick={() => setOpenMenu(false)}
            >
              <AiOutlineClose />
            </button>
          </ul>
          <button
            className={`d-block d-md-none ${styles.open__btn}`}
            onClick={() => setOpenMenu(true)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
