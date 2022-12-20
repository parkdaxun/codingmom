import styles from "../../styles/contents/all.module.css";
import Image from "next/image";
import Lego_pic from "./img/lego_pic.png";
import Maker_pic from "./img/maker.png";
import Software_pic from "./img/software.png";
import Fade from 'react-reveal/Fade'

export default function All() {
    return (
        <div className={styles.root}>
            <div className={styles.class}>
                <Fade bottom>
                    <h2>레고 공학 교육</h2>
                    <div className={styles.explain}>
                        <Image width={630} height={350} src={Lego_pic}/>
                        <p>자신만의 로봇을 만들어 보는 과정을 통해 공학적 사고와 문제해결력을 키울 수 있습니다.</p>
                    </div>
                </Fade>
            </div>
            <div className={styles.class}>
                <Fade bottom>
                    <h2>소프트웨어 교육</h2>
                    <div className={styles.explain}>
                        <Image width={630} height={350} src={Software_pic}/>
                        <p>사물인터넷, 앱 개발, 인공지능에 이르기까지 다양한 소프트웨어교육을 통해 편리한 세상을 만들어 봅시다.</p>
                    </div>
                </Fade>
            </div>
            <div className={styles.class}>
                <Fade bottom>
                    <h2>메이커 교육</h2>
                    <div className={styles.explain}>
                        <Image width={630} height={350} src={Maker_pic}/>
                        <p>생활에 필요한 물건들을 창의적으로 만들어보는 메이커교육은 여러분의 다양한 능력을 발현시켜 줄 것입니다.</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
