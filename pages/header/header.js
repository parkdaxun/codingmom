import Link from "next/link";
import styles from '../../styles/header/header.module.css'

export default function Header()
{
    return(
        <div className={styles.header}>
            <img src="/images/image5.png" alt={"icon"} className={styles.headerImg}></img>
            <div className={styles.nav}>
                <Link href="/"><span>코딩맘 소개</span></Link>
                <Link href="/"><span>강사 소개</span></Link>
                <Link href="/"><span>컨텐츠 소개</span></Link>
                <Link href="/"><span>교구 소개</span></Link>
            </div>
            <div className={styles.auth}>
                <Link href="/"><span>로그인</span></Link>
                <Link href="/"><span>회원가입</span></Link>
            </div>
        </div>
    )
}