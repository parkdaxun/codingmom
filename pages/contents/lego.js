import styles from "../../styles/contents/lego.module.css";
import Lego_pic from "./img/lego_pic.png";
import Image from "next/image";
import Fade from 'react-reveal/Fade'
export default function Lego() {
    return (
        <div>
            <Fade bottom>
                <div className={styles.title}>
                    <p>레고 공학 교육</p>
                </div>
                <div className={styles.lego_img}><Image src={Lego_pic}/></div>
                <div className={`${styles.title} ${styles.top2}`}>
                    <p>레고 공학 교육이란?</p>
                </div>
                <div className={styles.explain}>
                    <p>레고 블록은 언제 어디서든 쉽게 만들고 수정할 수 있으며, 분해할 수 있어 자신이 상상한 아이디어를 손쉽게 구현해 볼 수 있습니다.</p>
                    <p>특히, 코딩을 통해 움직이는 레고를 만들어 자신만의 로봇을 만들어 보는 과정을 통해 공학적 사고와 문제해결력을 키울 수 있습니다.</p>
                </div>
            </Fade>
        </div>
    )
}
