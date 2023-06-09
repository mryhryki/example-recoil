import {atom,  useRecoilState} from "recoil";
import {urlSyncEffect} from "@/recoil/effects/urlSyncEffect";
import {localStorageEffect} from "@/recoil/effects/localStorageEffect";

const key = 'count'
const countState = atom({
  key,
  default: 0,
  effects: [
    localStorageEffect(key),
    urlSyncEffect(key),
  ]
})

export const useCountState = () => useRecoilState(countState)
