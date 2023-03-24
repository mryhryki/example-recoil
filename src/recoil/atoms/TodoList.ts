import {atom, useRecoilState} from "recoil";
import {localStorageEffect} from "@/recoil/effects/localStorageEffect";

interface Todo {
  id: string,
  title: string,
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
