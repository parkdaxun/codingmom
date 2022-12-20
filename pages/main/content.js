import { AiOutlineArrowRight } from 'react-icons/ai'
import styles from '../../styles/main/content.module.css';
import Image from "next/image";

export default function Content(){
    return(
        <div className={styles.content}>
            <h1 className={styles.title}>Contents</h1>
            <div className={styles.flex}>
                <div className={styles.lego}>
                    <div className={styles.legoDiv}>
                        <span className={styles.legoFirst}>L</span>
                        <span className={styles.legoText}>EGO</span>
                    </div>
                    <span className={styles.legoImg}>
                        <Image src={"/images/lego.png"} alt={"icon"} width={680} height={600} />
                    </span>
                    <AiOutlineArrowRight className={styles.legoArrow} />
                </div>
                <div className={styles.vertical}>
                    <div className={styles.software}>
                        <div className={styles.softwareDiv}>
                            <span className={styles.softwareFirst}>S</span>
                            <span className={styles.softwareText}>OFTWARE</span>
                        </div>
                        <span className={styles.softwareImg}>
                            <Image src={"/images/software.png"} alt={"icon"} width={680} height={280} />
                        </span>
                        <AiOutlineArrowRight className={styles.softwareArrow} />
                    </div>
                    <div className={styles.others}>
                        <div className={styles.othersDiv}>
                            <span className={styles.othersFirst}>O</span>
                            <span className={styles.othersText}>THERS</span>
                        </div>
                        <span className={styles.othersImg}>
                            <Image src={"/images/other.png"} alt={"icon"} width={680} height={280} />
                        </span>
                        <AiOutlineArrowRight className={styles.othersArrow} />
                    </div>
                </div>
            </div>
        </div>
    )
}