import React from 'react'
import styles from './.module.scss'

const OurWord = () => {

  return (
    <div className="container">
      <section className={`${styles.our__word} section__spaces`}>
        <h2 className='section__title'><span>Don’t Take our word for it</span></h2>
        <div className={`${styles.our__word__video} ratio ratio-16x9`}>
          <iframe src="https://www.youtube.com/embed/wZ1K802JBJs" title="YouTube video" allowFullScreen></iframe>
        </div>
      </section>
    </div>
  )
}

export default OurWord;