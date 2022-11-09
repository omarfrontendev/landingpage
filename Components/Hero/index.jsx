import React from 'react'
import Slider from "react-slick";
import styles from './.module.scss'
import Link from 'next/link';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    className: `bg__images__slider`
  };

  const images = [
    {
      id: 1,
      img: 'https://special-tem.netlify.app/images/04.jpg'
    },
    {
      id: 2,
      img: 'https://special-tem.netlify.app/images/02.jpg'
    },
    {
      id: 3,
      img: 'https://special-tem.netlify.app/images/03.jpg'
    },
  ]

  return (
    <section className={`${styles.hero__Section} posiotin-relative`}>
      <Slider {...settings}>
        {images.map(img => (
          <div key={img.id} className={styles.bg__image__container}>
            <img src={img.img} alt='bg__image' className={styles.bg__IMAGE} />
          </div>
        ))}
      </Slider>
      <div className={`${styles.hero__content} position-absolute`}>
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className={`text-center ${styles.main__heading}`}>FOCUS ON WHAT REALLY MATTERS,<br/>LEAVE THE REST TO US.</h1>
            <Link className={styles.link__tell__how} href='/'>Tell Me How</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero