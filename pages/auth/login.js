import styles from "../../styles/login/login.module.css";
import Link from "next/link";

export default function Loginpage() {
  return (
    <div className={styles.loginmain}>
      <div className={styles.logins}>
        <Link href="/pages">
          <img
            src={"/images/logong.png"}
            alt={"icons"}
            className={styles.logong}
          />
        </Link>
        <img
          src={"/images/logback.png"}
          alt={"icons"}
          className={styles.logback}
        />
      </div>
      <Link href="https://kauth.kakao.com/oauth/authorize?client_id=95e372793e81af183d89b707dfa1d7bd&redirect_uri=http://localhost:3000/auth/kakao/callback&response_type=code">
        <button className={styles.kakao}>
          <img
            src={"/images/kakao.png"}
            alt={"icons"}
            className={styles.kakaoicon}
          />
          <text className={styles.start}>카카오로 시작하기</text>
        </button>
      </Link>
    </div>
  );
}