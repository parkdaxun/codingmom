import {useRecoilState} from "recoil";
import {kakaoUserInfo} from "../../../util/user";
import {useEffect} from "react";
import queryString from "query-string";
import {instance} from "../../../util/axiosSetting";
import { useRouter } from "next/router";

export default function Callback() {
    const router = useRouter();
    const [user, setUser] = useRecoilState(kakaoUserInfo);

    const isSignUpUser = (code) => {
        instance
            .post(`/user/kakaoLogin?k_id=${code}`)
            .then((res) => {
                if (res.data === "guest") 
                    window.location.href = "/auth/signup"
                else {
                    console.log(res)
                    setUser(({
                        ...res.data,
                        isLogin: true,
                    }));
                    window.location.href = "/"
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }

    const getKakaoUserInfo = (code) => {
        instance
            .get(`/user/getKakaoUserInfo?code=${code}`)
            .then((res) => {
                setUser({
                    ...user,
                    kakaoid: res.data.k_id,
                    k_img_url: res.data.k_img_url,
                })
                isSignUpUser(res.data.k_id);
            })
            .catch((error) => {
                console.log(error)
            })
        };

    useEffect(() => {
        const query = queryString.parse(window.location.search);
        getKakaoUserInfo(query.code);
    }, [])

    return (<></>)
};
