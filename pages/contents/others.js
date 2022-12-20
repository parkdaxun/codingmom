import styles from "../../styles/contents/software.module.css";
import Image from "next/image";
import Fade from 'react-reveal/Fade'
import maker from "./img/maker.png"
export default function Others() {
    return (
        <div>
            <Fade bottom>
                <div className={styles.title}>
                    <p>메이커 교육</p>
                </div>
                <div className={styles.lego_img}><Image width={630} height={350} src={maker} /></div>
                <div className={`${styles.title} ${styles.top2}`}>
                    <p>메이커 교육이란?</p>
                </div>
                <div className={styles.explain}>
                    <p>디자인사고를 통해 직접 아이디어를 생각하고 구체화하며 다양한 방법의 개선과정을 적용하여 생활에 필요한</p>
                    <p>물건들을 창의적으로 만들어보는 메이커교육은 여러분의 다양한 능력을 발현시켜 줄 것 입니다.</p>
                </div>
            </Fade>
        </div>
    )
}
