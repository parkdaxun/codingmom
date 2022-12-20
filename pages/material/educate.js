import Entry from "./img/entry.png";
import Scratch from "./img/scratch.png";
import ThreeDmo from "./img/3Dmodeling.png";
import Python from "./img/python.png";
import App from "./img/app_inventer.png";
import Image from "next/image";
import styles from "../../styles/material/all.module.css";

export default function Edu() {
    return (
        <div>
            <div className={styles.material}>
                <div className={styles.item}>
                    <Image src={Entry} width={300} height={300}/>
                    <p className={styles.title}>엔트리</p>
                </div>
                <div className={styles.margin}></div>
                <div className={styles.item}>
                    <Image src={Scratch} width={300} height={300}/>
                    <p className={styles.title}>스크레치</p>
                </div>
            </div>
            <div className={styles.material}>
                <div className={styles.item}>
                    <Image src={ThreeDmo} width={300} height={300}/>
                    <p className={styles.title}>3D 모델링</p>
                </div>
                <div className={styles.item}>
                    <Image src={Python} width={300} height={300}/>
                    <p className={styles.title}>파이썬</p>
                </div>
            </div>
            <div className={styles.material}>
                <div className={styles.item}>
                    <Image src={App} width={300} height={300}/>
                    <p className={styles.title}>앱 인벤터</p>
                </div>
            </div>
        </div>
    )
}
