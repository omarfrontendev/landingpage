import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import styles from './.module.scss'

const PrevButton = props => {
  return (
    <button 
    className={`${styles.button} ${styles.perv__btn}`} 
    onClick={() => props.slider.current.slickPrev()}
    >
      <BsFillArrowLeftCircleFill className={styles.icon} />
    </button>
  );
};
export default PrevButton