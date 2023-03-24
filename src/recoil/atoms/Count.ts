import {atom,  useRecoilState} from "recoil";
import {urlSyncEffect} from "@/recoil/effects/urlSyncEffect";

const key = 'count'
const countState = atom({
  key,
  default: 0,
  effects: [
    urlSyncEffect(key)
  ]
})

export const useCountState = () => useRecoilState(countState)
