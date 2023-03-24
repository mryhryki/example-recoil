import {AtomEffect} from "recoil";

export const localStorageEffect = <T>(key: string): AtomEffect<T> => ({setSelf, onSet}) => () => {
  const savedValue = 'localStorage' in globalThis ? localStorage.getItem(key) : null
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue))
  }
  onSet((newValue, _, isReset) => {
    isReset ?
      localStorage.removeItem(key) :
      localStorage.setItem(key, JSON.stringify(newValue))
  })
}

