import {atom, AtomEffect, useRecoilState} from "recoil";

interface Todo {
  id: string,
  title: string,
}

const localStorageEffect = (key: string): AtomEffect<Todo[]> => ({setSelf, onSet}) => () => {
  const savedValue = 'localStorage' in globalThis ? localStorage.getItem(key) : null
  const maybeArr = JSON.parse(savedValue ?? '[]')
  if (Array.isArray(maybeArr)) {
    setSelf(maybeArr)
  }
  onSet((newValue, _, isReset) => {
    isReset ?
      localStorage.removeItem(key) :
      localStorage.setItem(key, JSON.stringify(newValue))
  })
}

const key = 'TodoList'
const todoListState = atom<Todo[]>({
  key,
  default: [],
  effects: [
    localStorageEffect('TodoList'),
  ]
})

export const useTodoListState = () => useRecoilState(todoListState)
