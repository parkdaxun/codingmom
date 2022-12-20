import {useState} from "react";
import styles from '../../styles/contents/contentIndex.module.css'
import All from "./all";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Lego from "./lego";
import Software from "./software";
import Others from "./others";
import Fade from 'react-reveal/Fade'
export default function Index(){
    const [education, setEducation] = useState(1);

    return(
        <div className={styles.root}>
            <Header />
            <div className={styles.white}>
                <Fade bottom>
                <h2 className={styles.intro}>콘텐츠 소개</h2>
                <p className={styles.content}>"더 나은 미래를, 보다 많은 학생에게"</p>
                <p className={styles.content2}>모든 아이들이 누릴 수 있는 소프트웨어 교육</p>
                </Fade>
                <div className={styles.menu}>
                    <span className={styles.left} onClick={() => setEducation(1)} >전체</span>
                    <span className={styles.left} onClick={() => setEducation(2)} >레고교육</span>
                    <span className={styles.left} onClick={() => setEducation(3)} >소프트웨어교육</span>
                    <span className={styles.left} onClick={() => setEducation(4)} >기타교육들</span>
                </div>
                {education === 1 && <All/>}
                {education === 2 && <Lego/>}
                {education === 3 && <Software/>}
                {education === 4 && <Others/>}
                <Footer/>
            </div>
        </div>
    )
}