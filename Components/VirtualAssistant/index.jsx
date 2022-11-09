import styles from './.module.scss'

const VirtualAssistant = () => {
  return (
    <div className="container">
      <section className={`${styles.assistant__section} section__spaces`}>
        <h2 className='section__title'><span>Virtual Assistant</span></h2>
        <div className={`${styles.assistant__content} d-flex align-items-center justigy-content-center`}>
          <p className={styles.assistant__desc}>A Virtual Assistant, is the secret weapon of successful people. Not just in business, but in life. We give you more time to focus on what really matters in your business, by taking care of the little details. Stuff like scheduling meetings, paying bills, and booking travel. As a LOVA client, you get your very own Virtual Assistant (VA) — a smart, intuitive, & reliable person who works remotely as an extra brain & set of hands. You assign a task and your VA is on it.</p>
          <div className={`${styles.assistant__img} d-flex align-items-center justify-content-center`}>
            <div style={{overflow: 'hidden'}}>
              <img src="https://leagueofva.com/wp-content/uploads/2020/04/person-playing-chess-1040157-600x400.jpg" alt="assistant__image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VirtualAssistant