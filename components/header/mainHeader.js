import Link from "next/link";
import styles from "../../styles/header/mainHeader.module.css";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import { useRecoilValue} from "recoil";
import { kakaoUserInfo} from "../../util/user";
import { Init } from "../../util/init";

export default function MainHeader() {

    const user = useRecoilValue(kakaoUserInfo)
    const [userinfo, setUserInfo] = useState(Init)
    const [header, setHeader] = useState(true);
    const headerRef = useRef();
    let lastPos = 0;

    useEffect(() => {
        console.log(user)
        setUserInfo(user);
    }, [])

    useScrollPosition(({currPos}) => {
        const scrollY = Math.abs(currPos.y);
        if (scrollY < 870) {
            headerRef
                .current
                .classList
                .remove(styles.whiteBack);
        }
        if (scrollY > lastPos) {
            headerRef
                .current
                .classList
                .add(styles.invisible);
        } else if (scrollY === 0 || scrollY < lastPos) {
            headerRef
                .current
                .classList
                .remove(styles.invisible);
            if (scrollY > 870) {
                headerRef
                    .current
                    .classList
                    .add(styles.whiteBack);
            }
        }
        lastPos = scrollY;
    }, [header]);

    return (
      <div className={styles.header} ref={headerRef}>
        <span className={styles.headerImg}>
          <Image
            src="/images/image5.png"
            alt={"icon"}
            width={80}
            height={80}
          ></Image>
        </span>
        <div className={styles.nav}>
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
        <div className={styles.auth}>
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
