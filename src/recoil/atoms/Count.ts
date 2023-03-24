import {atom, AtomEffect, useRecoilState} from "recoil";

const urlSyncEffect = (key: string): AtomEffect<number> => ({setSelf, onSet}) => () => {
  setSelf(parseInt(new URL(location.href).searchParams.get(key) ?? '0') || 0)
  onSet((newValue, _, isReset) => {
    const url = new URL(location.href)
    if (isReset) {
      url.searchParams.delete(key)
    } else {
      url.searchParams.set(key, String(newValue))
      history.replaceState(null, '', url)
    }
  })
}

const key = 'count'
const countState = atom({
  key,
  default: 0,
  effects: [
    urlSyncEffect(key)
  ]
})

export const useCountState = () => useRecoilState(countState)
