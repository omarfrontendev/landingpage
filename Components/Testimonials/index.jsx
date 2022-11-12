import React, { useEffect } from 'react'
import Slider from "react-slick";
import ReviewCard from '../ReviewCard';
import styles from './.module.scss'
import Aos from 'aos';
import "aos/dist/aos.css";

const Testimonials = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const reviews = [
    {
      id: 1,
      name: 'Rich',
      job: 'DashSport',
      opinion: "Malek has been excellent to work with these past few months. He’s always ready to tackle the jobs I have given him with enthusiasm. Very quick to offer his own thoughts and more than capable of working on his own. We had a few projects that I was stuck on and through his help we were able to get past a lot of sticking points that I’ve been very pleased and I’m glad I was able to find him!"
    },
    {
      id: 2,
      name: 'Dave',
      job: 'Lightbody Marketing',
      opinion: 'Malek has been an excellent addition to my team. His communication is clear, concise, and always fast. He and his team follow the training provided Carefully, are diligent in their work, and always meet deadlines. It is a huge weight off my shoulders to have Malek and his team helping me execute on deliverables.'
    },
    {
      id: 3,
      name: 'Karim',
      job: 'Options Outsourcing',
      opinion: 'Malek has been a great addition to our team at Options Outsourcing. He is a great team player and capable of doing solo tasks when asked. I think his strongest asset is that he thinks of other alternatives to solutions making him a great problem solver. So in summary, I recommend him to anyone looking to use his services.'
    },
    {
      id: 4,
      name: 'Ibrahim',
      job: 'Ecomm Drop-shipper',
      opinion: 'Malek has been an exceptional person to work with, and his work ethic is impeccable, as a part of our team he has tackled any task we’ve given him without any problems. He’s a team player and he has a person for every job you give him. He finishes everything in a timely manner and is honest about his work. Him and his team have taken a great weight off my shoulders and without him growing my brands wouldn’t have been possible. For anyone looking to work with Malek, you will not regret it'
    }
  ];

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4500,
    // cssEase: "cubic-bezier(1, .1, .5, 1)",
    className: 'feedback__slider'
  };

  return (
    <section className={`${styles.section} section__spaces`}>
      <div className={styles.over__lay}></div>
      <div data-aos='fade-up' className={`${styles.slider__conatiner} container`}>
        <h2 className='section__title'><span>Testimonials</span></h2>
        <Slider {...settings}>
          {reviews.map(review => (
            <ReviewCard 
              key={review.id}
              name={review.name}
              job={review.job}
              opinion={review.opinion}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials