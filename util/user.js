import {atom} from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const kakaoUserInfo = atom({
    key: 'kakaoUserInfo',
    default: {
        id: 0,
        name: "",
        type: 0,
        kakakoid: "",
        k_img_url: "",
        isLogin: false,
    },
    effects_UNSTABLE: [persistAtom],
})