import React, { useContext, useEffect, useRef } from 'react'
import styles from './.module.scss'
import Slider from "react-slick";
import AppContext from '../../store/app-context';
import TeamCard from '../TeamCard';
import Aos from 'aos';
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Team = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const ctx = useContext(AppContext);
  const teamSection = useRef(null)
  useEffect(() => {
    ctx.setTeamOffset(teamSection.current.offsetTop);
  }, [ctx]);


  const team = [
    {
      id: 1,
      name: 'Malek Abdelfattah',
      position: 'CEO & Founder',
      img: 'https://leagueofva.com/wp-content/uploads/2020/04/527ff157-649f-4e11-a2de-e3e8c509f512.jpg',
      desc: [
        'Armed with 10 years of experience in Customer Service & Virtual Assistance, 3 of which are in management roles where I recruited, hired, trained, & maintained a team averaging 20 people.',
        'I’ve acquired a very versatile set of skills that allows me to manage this team with a guarantee  of efficiency and productivity without you having to do so.'
      ]      
    },
    {
      id: 2,
      name: 'Hagar Magdy',
      position: 'Data Entry / Internet Researcher',
      img: 'https://leagueofva.com/wp-content/uploads/2020/02/Hagar-Magdy-253x300.png',
      desc: [
        'Throughout my career, I have gained experience in Data Entry, Internet research and Google search tricks, E-mail Customer care, Virtual Assistance, Content creation and Marketing.',
        'I have a record of accuracy and client satisfaction. I can work under pressure with the ability to handle multiple projects ensuring completion within deadlines. I’m enthusiastic and always eager to learn more and grow.',
        'I believe that quantity is just as important as quality, and balancing is a must.'
      ]
    },
    {
      id: 3,
      name: 'Maryam T. Fahmy',
      position: 'Video Editor',
      img: 'https://leagueofva.com/wp-content/uploads/2020/02/86264189_568368073893188_7183029122602369024_n-200x300.jpg',
      desc: [
        'During my college years I got into video editing, directing, videography, & photo retouching. All as a bunch of hobbies through the years, and I gained a lot of experience.',
        'After a while video editing in particular turned into a passion of mine, I then decided that this will be my career and Started my Freelancing journey. I can edit any type of video starting from simple Vlog, IGTV to a short movie.'
      ]
    },
    {
      id: 4,
      name: 'Rana Emad',
      position: 'LinkedIn Specialist / Virtual Assistant',
      img: 'https://leagueofva.com/wp-content/uploads/2020/02/Rana-Emad-259x300.png',
      desc: [
        'Responsible, Punctual, Dynamic, & Creative.',
        'I am a quick learner, and an easy communicator. Always attempt to be as honest and committed as possible to the activity at hand. As well as adaptable and compliant to all job obligations.',
        'I’ve been working mostly on LinkedIn related tasks, which allowed me to become a specialist at the subject of anything related to the platform.'
      ]
    },
    {
      id: 5,
      name: 'Moataz Ehab',
      position: 'Graphic Designer',
      img: 'https://leagueofva.com/wp-content/uploads/2020/02/86975829_1444127945755995_5637785299221217280_n-removebg-preview-165x300.png',
      desc: [
        'Being a graphic designer has given me the power to create something out of nothing! This turned it into a passion of a lifetime for me.',
        'Just recently graduated, and following my dreams.'
      ]
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: 'feedback__slider team__slider',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <section id='our__team' ref={teamSection} className={`${styles.section} section__spaces`}>
      <div className="container">
        <h2 data-aos='fade-up' className='section__title'><span>MEET THE TEAM</span></h2>
      </div>
      <Slider {...settings}>
        {team.map((t, i) => (
          <TeamCard 
            key={t.id}
            name={t.name}
            position={t.position}
            img={t.img}
            desc={t.desc}
            index={i}
          />
        ))}
      </Slider>
    </section>
  )
}

export default Team