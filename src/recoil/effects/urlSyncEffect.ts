import {AtomEffect} from "recoil";

export const urlSyncEffect = (key: string): AtomEffect<number> => ({setSelf, onSet}) => () => {
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

