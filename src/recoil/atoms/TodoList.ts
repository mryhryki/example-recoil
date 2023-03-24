import {atom, useRecoilState} from "recoil";
import {localStorageEffect} from "../effects/localStorageEffect";
import {urlSyncEffect} from "@/recoil/effects/urlSyncEffect";

interface Todo {
  id: string,
  title: string,
}

const key = 'TodoList'
const todoListState = atom<Todo[]>({
  key,
  default: [],
  effects: [
    urlSyncEffect(key),
    localStorageEffect(key),
  ]
})

export const useTodoListState = () => useRecoilState(todoListState)
