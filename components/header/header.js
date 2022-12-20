import Link from "next/link";
import styles from "../../styles/header/header.module.css";
import classNames from "classnames";
import Image from "next/image";
import {useRouter} from "next/router";
import { useRecoilValue } from "recoil";
import { kakaoUserInfo } from "../../util/user";
import { useEffect, useState } from "react";
import { Init } from "../../util/init";

export default function Header() {

    const router = useRouter();
    const user = useRecoilValue(kakaoUserInfo);
    const [userinfo, setUserinfo] = useState(Init);

    useEffect(()=>{
        setUserinfo(user);
    }, [])

    return (
      <div className={styles.header}>
        <span className={styles.link} onClick={() => router.push("/")}>
          <Image src="/images/logo2.png" alt={"icon"} width={100} height={50} />
        </span>
        <div className={classNames(styles.nav, styles.text)}>
          <Link href="/intro">
            <span>코딩맘 소개</span>
          </Link>
          <Link href="/lecturer">
            <span>강사 소개</span>
          </Link>
          <Link href="/contents">
            <span>콘텐츠 소개</span>
          </Link>
          <Link href="/material">
            <span>교구 소개</span>
          </Link>
        </div>
        <div className={classNames(styles.auth, styles.text)}>
        {userinfo.isLogin ? (
            <div>
              {userinfo.type === "1" ? (
                <p>
                  {userinfo.name}
                  &nbsp;강사님
                </p>
              ) : (
                <p>{userinfo.name}님</p>
              )}
            </div>
          ) : (
            <Link href="/auth/login">
              <span>카카오로 계속</span>
            </Link>
          )}
        </div>
      </div>
    );
}
