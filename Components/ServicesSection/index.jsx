import React from 'react'
import Masonry from 'react-masonry-css'
import ServiceCard from '../ServiceCard'
import styles from './.module.scss'

const ServicesSection = () => {

   const services = [
    {
      id: 1,
      label: 'Admin / Virtual Assistace',
      img: '/assets/services/2.png',
      desc: 'Feeling overwhelmed? Too many emails to filter through? Too many To-Do’s that you need a To-Do item to fill your To-Do list? Your calendar is all over the place? One too many postponed mass email? This is a versatile role, the sky’s the limit in what you may ask from your VA (with the exception of specialized tasks)'
    },
    {
      id: 2,
      label: 'Social Media Moderating',
      img: '/assets/services/pngwing.com.png',
      desc: 'Your Facebook Group is growing too much to handle? Never enough time to answer all those community question? Your Group doesn’t have enough engagement because you don’t have the time or energy to keep it engaged? We have experts in group & page moderation, providing support to community members via replying to comments, answering messages, and keeping the community organized and aligned with its rules. Availability in both English & Arabic language.'
    },
    {
      id: 3,
      label: 'Linkedin organic Growth',
      img: '/assets/services/How-to-Create-a-Company-Page-on-Linkedin.png',
      desc: 'A combination of multiple famous strategies for growing your network on LinkedIn, that has proven success for many clients. In-short, we handle your account and like/comment/interact with others on your behalf while mimicking your style to increase your visibility and grow your network. Read more about it in our founder’s e-book, available to download for free in the homepage.'
    },
    {
      id: 4,
      label: 'Customer Services',
      img: '/assets/services/1.png',
      desc: 'Always wanted to provide world class customer service to your clients, but never knew how? Multiple of our team members are customer service veterans, who have been in the industry for years, providing various forms of world class customer service via Email, ticketing, chat, or phone!'
    },
    {
      id: 5,
      label: 'Data Entry And internet Research',
      img: '/assets/services/data.png',
      desc: 'Want to research the internet for some information but don’t know where to start? Some of our members are so good at internet research they feel like a private investigator level! As well as simple or complex data entry into various forms of CRMs/Sheets.'
    },
    {
      id: 6,
      label: 'Graphic Designing',
      img: '/assets/services/pngwing.com (1).png',
      desc: `Need a new Logo? Want to revamp your LinkedIn banner? Need some new designs for your website? We have 2 graphic designers on the team, both with different specialties and levels of experience. Portfolios available upon request.`
    },
    {
      id: 7,
      label: 'Video Editing',
      img: '/assets/services/film-editing.png',
      desc: 'Your LinkedIn coach told you to create more videos for your profile? Or maybe you want to explore generating an audience via TikTok? What you need is a video editor with a directing background, who is also able to create short films & edit them, or clean up an existing footage. Portfolio available upon request.'
    },
    {
      id: 8,
      label: 'Media Buying',
      img: '/assets/services/buy.png',
      desc: 'An experienced media buyer, providing ad strategies as well as implementing them, generating leads and turning them to customers through the automated process of creating ads on multiple platforms.'
    },
  ];

  const breakpoints = {
    default: 2,
    700: 1
  }

  return (
    <section className='section__spaces container'>
      <h2 className='section__title'><span>Our Services</span></h2>
      <div className={styles.cards__container}>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {services.map(service => (
              <ServiceCard 
                key={service.id}
                label={service.label}
                img={service.img}
                desc={service.desc}
              />
            ))}
        </Masonry>
      </div>
    </section>
  )
}

export default ServicesSection