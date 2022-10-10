import { Header } from './components/Header/Header'
import { InputTodo } from './components/InputTodo/InputTodo'
import { Status } from './components/Status/Status'

import { v4 as uuidv4 } from 'uuid'

import { ClipboardText } from 'phosphor-react'

import styles from './App.module.css'

import './global.css'

import { useState } from 'react'
import { TaskCard } from './components/TaskCard/TaskCard'

interface Todo {
  id: string
  name: string
  finished: boolean
}

function App() {
  const [todoList, setTodoList] = useState<Array<Todo>>([])

  function onCreateTodo(todo: string) {
    const newTodo = {
      id: uuidv4(),
      name: todo,
      finished: false
    }

    setTodoList([...todoList, newTodo])
  }

  function onDeleteTodo(id: string) {
    let newTodoList = [...todoList]

    let indexTodo = newTodoList.findIndex(todo => todo.id === id)

    newTodoList.splice(indexTodo, 1)

    setTodoList(newTodoList)
  }

  function onChangeTodoState(id: string) {
    let newTodoList = [...todoList]

    let todo = newTodoList.find(todo => todo.id === id)
    todo!.finished = !todo?.finished

    setTodoList(newTodoList)
  }

  const createdTodos = todoList.length
  const finishedTodos = todoList.filter(todo => {
    return todo.finished === true
  }).length

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTodo onCreateTodo={onCreateTodo} />
        <div className={styles.contentContainer}>
          <div className={styles.todoStatus}>
            <Status text='Tarefas criadas' quantity={createdTodos.toString()} color='blue' />
            <Status text='Concluídas' quantity={`${finishedTodos.toString()} de ${createdTodos.toString()}`} color='purple' />
          </div>

          {todoList.length === 0 ? (
            <div className={styles.emptyList}>
              <div>
                <div className={styles.clipboardContainer}>
                  <ClipboardText size={56} />
                </div>
                <div className={styles.textContainer}>
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p><span>Crie tarefas e organize seus itens a fazer</span></p>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.tasksContainer}>
              {todoList.map((todo) => (
                <TaskCard key={todo.id} id={todo.id} name={todo.name} changeState={onChangeTodoState} deleteTodo={onDeleteTodo} />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default App
