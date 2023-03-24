import {AtomEffect} from "recoil";

export const urlSyncEffect = <T>(key: string): AtomEffect<T> => ({setSelf, onSet}) => () => {
  const urlValue = new URL(location.href).searchParams.get(key)
  if (urlValue != null) {
    setSelf(JSON.parse(urlValue))
  }
  onSet((newValue, _, isReset) => {
    const url = new URL(location.href)
    if (isReset) {
      url.searchParams.delete(key)
    } else {
      url.searchParams.set(key, JSON.stringify(newValue))
    }
    history.replaceState(null, '', url)
  })
}

