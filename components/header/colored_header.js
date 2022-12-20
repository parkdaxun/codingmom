import Link from "next/link";
import styles from '../../styles/header/colored_header.module.css';
import logo from "../../public/images/colored_logo.png";
import Image from "next/image";

export default function colored_header()
{
    return (
      <div className={styles.header}>
        <Image src={logo}></Image>
        <div className={styles.nav}>
          <Link href="/intro">
            <span>코딩맘 소개</span>
          </Link>
          <Link href="/lecturer">
            <span>강사 소개</span>
          </Link>
          <Link href="/contents/all">
            <span>컨텐츠 소개</span>
          </Link>
          <Link href="/material">
            <span>교구 소개</span>
          </Link>
        </div>
        <div className={styles.auth}>
          <Link href="/auth/login">
            <span>카카오로 계속</span>
          </Link>
        </div>
      </div>
    );
}
