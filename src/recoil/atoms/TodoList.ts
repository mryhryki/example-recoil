import {atom, useRecoilState} from "recoil";

interface Todo {
  id: string,
  title: string,
}

const todoListState = atom<Todo[]>({
  key: 'TodoList',
  default: [],
})

export const useTodoListState = () => useRecoilState(todoListState)
