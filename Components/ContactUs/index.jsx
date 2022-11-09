/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Input from '../Input'
import styles from './.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

const ContactUs = () => {

  const [data, setData] = useState({service: 'Admin/Virtual Assistance'});
  console.log(data)

  const resources = [
    {
      id: 'name',
      placeholder: 'Name',
      type: 'text',
      required: true
    },
    {
      id: 'email',
      placeholder: 'Email',
      type: 'email',
      required: true
    }
  ];
  const services = [
    {
      id: 'service',
      placeholder: 'Service',
      type: 'select__box',
      options: [
        'Admin/Virtual Assistance',
        'Social Media Moderation',
        'LinkedIn Organic growth',
        'Customer Service',
        'Data Entry/Internet research',
        'Graphic Design',
        'Video Editing',
        'Media Buying',
        'Other'
      ],
      required: true
    },
    {
      id: 'other',
      placeholder: 'Other',
      type: 'text',
      required: false
    },
  ]

  return (
    <section className='section__spaces container'>
      <h2 className='section__title'><span>Contact Us</span></h2>
      <div className={`${styles.contact__us__content} d-flex`}>
        <div className={styles.left__col}>
          <div className={styles.image__container}>
            <img src="/assets/pexels-marc-mueller-380769.jpg" alt="image" />
          </div>
        </div>
        <div className={styles.contact__form__container}>
          <form className={styles.form}>
          <div className={styles.label}>Your Info:</div>
            <div className={styles.inputs__group}>
              {resources.map(input => (
                <Input 
                  key={input.id}
                  id={input.id}
                  placeholder={input.placeholder}
                  required={input.required}
                  type={input.type}
                  setData={setData}
                  data={data}
                  // options={input.options}
                />
              ))}
            </div>
            <motion.div className={styles.services}>
              <Input 
                id={services[0].id}
                placeholder={services[0].placeholder}
                required={services[0].required}
                type={services[0].type}
                setData={setData}
                data={data}
                options={services[0].options}
              />
              <AnimatePresence>
                {data.service === 'Other' && (
                  <div className={styles.select__box__container}>
                    <motion.input
                      animate={{height: '50px'}}
                      exit={{height: '0px'}} 
                      initial={{height: '0px'}}
                      transition={{type: 'linear'}}
                      id={services[1].id}
                      placeholder={services[1].placeholder}
                      required={services[1].required}
                      type={services[1].type}
                      value={data.other || ''}
                      onChange={(e) => setData({
                        ...data,
                        other: e.target.value
                      })}
                      // ========
                      className={styles.input}
                    />
                    <p className={styles.error__message}>this filed Cant be empty</p>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className={styles.label}>Your Message:</div>
            <div className={styles.message}>
              <Input 
                id='message__title'
                placeholder='Message Title'
                required={true}
                type='text'
                setData={setData}
                data={data}
              />
              <div className={styles.select__box__container}>
                <textarea 
                  name="meassage__body" 
                  className={styles.textarea}
                  id="meassage__body" 
                  placeholder='Message Body'
                />
                <p className={styles.error__message}>this filed Cant be empty</p>
              </div>
            </div>
            <button type='submit' disabled className={styles.submit__btn}>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs