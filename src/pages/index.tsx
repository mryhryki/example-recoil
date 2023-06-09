import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useCountState} from "@/recoil/atoms/Count";
import {useTodoListState} from "@/recoil/atoms/TodoList";
import {useState} from "react";

export default function Home() {
  const [count, setCount] = useCountState()
  const [todoList, setTodoList] = useTodoListState()

  const [todo, setTodo] = useState('')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <h1>Example recoil</h1>
        <section>
          <h2>Counter</h2>
          <button style={{padding: '4px 8px'}} onClick={() => setCount((currentValue) => currentValue - 1)}>＜</button>
          <span style={{margin: '0 1rem'}}>
            {count}
          </span>
          <button style={{padding: '4px 8px'}} onClick={() => setCount((currentValue) => currentValue + 1)}>＞</button>
        </section>
        <section>
          <h2>TODO List</h2>
          <ul>
            {todoList.map(({id, title}) => (
              <li key={id}>{title}</li>
            ))}
            <li>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setTodoList((current) => [...current, {
                    id: `${Math.random() * 99999999}`.padStart(8, '0'),
                    title: todo
                  }])
                  setTodo('')
                }}
              >
                <input type="text" style={{padding: '8px 16px', marginRight: '8px'}} value={todo}
                       onChange={(event) => setTodo(event.target.value)}/>
                <input type="submit" style={{padding: '8px 16px'}} value="Add"/>
              </form>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
