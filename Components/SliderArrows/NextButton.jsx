import { BsFillArrowRightCircleFill } from "react-icons/bs"
import styles from './.module.scss'

const NextButton = props => {
  return (
    <button 
      className={`${styles.button} ${styles.next_btn}`} 
      onClick={() => props.slider.current.slickNext()}
    >
      <BsFillArrowRightCircleFill className={styles.icon} />
    </button>
  );
};
export default NextButton