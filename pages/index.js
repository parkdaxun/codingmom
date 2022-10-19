import {Header, Content, Intro, Lecturer, Footer} from "./allFiles";
import styles from '../styles/index.module.css';

export default function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.mainIntro}>
            <img src={"/images/main.png"} alt={"icon"} className={styles.mainImg} />
            <Header/>
            <p className={styles.mainC}>Coding</p>
            <p className={styles.mainM}>Mom</p>
            <p className={styles.mainS}>코딩맘 SW 아카데미</p>
        </div>
        <Content />
        <Intro/>
        <Lecturer/>
        <Footer/>
    </div>
  )
}