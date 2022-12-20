import styles from '../../styles/main/lecturer.module.css';
import Image from "next/image";
import {AiOutlineRight} from 'react-icons/ai';

export default function Lecturer() {
    return (
        <div className={styles.lecturer}>
            <div className={`${styles.lec} ${styles.one}`}>
                <span className={styles.lecImg}>
                    <Image src={"/images/lecturer.png"} alt={"icon"} layout={"fill"}/>
                </span>
                <p className={styles.lecField}>소프트웨어</p>
            </div>
            <div className={`${styles.lec} ${styles.two}`}>
                <span className={styles.lecImg}>
                    <Image src={"/images/lecturer2.png"} alt={"icon"} layout={"fill"}/>
                </span>
                <p className={styles.lecField}>레고</p>
            </div>
            <div className={`${styles.lec} ${styles.three}`}>
                <span className={styles.lecImg}>
                    <Image src={"/images/lecturer3.png"} alt={"icon"} layout={"fill"}/>
                </span>
                <p className={styles.lecField}>메이커</p>
            </div>
            <div className={`${styles.lec} ${styles.four}`}>
                <span className={styles.lecImg}>
                    <Image src={"/images/lecturer4.png"} alt={"icon"} layout={"fill"}/>
                </span>
                <p className={styles.lecField}>레고</p>
            </div>
            <div className={`${styles.lec} ${styles.five}`}>
                <span className={styles.lecImg}>
                    <Image src={"/images/lecturer5.png"} alt={"icon"} layout={"fill"}/>
                </span>
                <p className={styles.lecField}>소프트웨어</p>
            </div>
            <p className={styles.info}>
                자세히 보기
                <AiOutlineRight className="arrow"/>
            </p>
        </div>
    );
}