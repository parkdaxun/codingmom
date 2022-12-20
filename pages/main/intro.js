import styles from '../../styles/main/intro.module.css';
import Image from "next/image";
import { AiOutlineRight } from 'react-icons/ai';
import IntroImage from '../../public/images/codingmom.png'

export default function Intro(){
    return (
      <div className={styles.intro}>
        <div className={styles.introText}>
          <p className={styles.text}>당신의 아이들을 위해</p>
          <p className={styles.text}>모인 협동조합</p>
        </div>
        <div className={styles.imgSize}>
          <span className={styles.introImg}>
            <Image src={IntroImage} alt={"icon"} layout="fill" quality={100} />
          </span>
          <div className={styles.remarks}>
            <p className={styles.remarksText}>
              뭔가 코딩맘을 아우러서 소개하는 내용이 들어갔으면 좋을 것 같은 영역
            </p>
            <p className={styles.info}>
              자세히 보기 <AiOutlineRight />
            </p>
          </div>
        </div>
      </div>
    );
}