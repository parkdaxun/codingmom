import Adu from "./img/aduino.png";
import Micro from "./img/micro.png";
import Ras from "./img/raspberry.png";
import ThreeD from "./img/3Dprinter.png";
import EV3 from "./img/EV3.png";
import Spike from "./img/spike.png";
import Image from "next/image";
import styles from "../../styles/material/all.module.css";
import Fade from 'react-reveal/Fade'
export default function All() {
    return (
        <div>
            <Fade bottom>
            <div className={styles.material}>
                <div className={styles.item}>
                    <Image className={styles.Im} src={Adu} width={300} height={300}/>
                    <p className={styles.title}>아두이노</p>
                </div>
                <div className={styles.margin}></div>
                <div className={styles.item}>
                    <Image className={styles.Im} src={Micro} width={300} height={300}/>
                    <p className={styles.title}>마이크로비트</p>
                </div>
            </div>
            <div className={styles.material}>
                <div className={styles.item}>
                    <Image src={Ras} width={300} height={300}/>
                    <p className={styles.title}>라즈베리파이</p>
                </div>
                <div className={styles.item}>
                    <Image src={ThreeD} width={300} height={300}/>
                    <p className={styles.title}>3D프린터</p>
                </div>
            </div>
            <div className={styles.material}>
                <div className={styles.item}>
                    <Image src={EV3} width={300} height={300}/>
                    <p className={styles.title}>EV3(레고)</p>
                </div>
                <div className={styles.item}>
                    <Image src={Spike} width={300} height={300}/>
                    <p className={styles.title}>스파이크(레고)</p>
                </div>
            </div>
            </Fade>
        </div>
    )
}
