import {atom, useRecoilState} from "recoil";

const countState = atom({
    key: 'count',
    default: 0,
})

export const useCountState = () => useRecoilState(countState)
