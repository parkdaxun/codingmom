import styles from "../../styles/contents/software.module.css";
import Soft_pic from "./img/software.png";
import Image from "next/image";
import Fade from 'react-reveal/Fade'
export default function Software() {
    return (
        <div>
            <Fade bottom>
                <div className={styles.title}>
                    <p>소프트웨어 교육</p>
                </div>
                <div className={styles.lego_img}><Image src={Soft_pic} /></div>
                <div className={`${styles.title} ${styles.top2}`}>
                    <p>소프트웨어 교육이란?</p>
                </div>
                <div className={styles.explain}>
                    <p>컴퓨팅사고를 통해 많은 사람들을 이롭게 하는 소프트웨어를 만들어 낼 수 있는 역량은 세상을 바꿀 수도 있습니다.</p>
                    <p>사물인터넷, 앱 개발, 인공지능에 이르기까지 다양한 소프트웨어교육을 통해 편리한 세상을 만들어 봅시다.</p>
                </div>
            </Fade>
        </div>
    )
}
