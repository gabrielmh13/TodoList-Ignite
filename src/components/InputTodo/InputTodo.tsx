import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

import styles from './InputTodo.module.css'


interface InputTodoProps {
    onCreateTodo: (todo: string) => void
}

export function InputTodo({ onCreateTodo }: InputTodoProps) {
    const [todoDesc, setTodoDesc] = useState('')

    function handleCreateTodo() {
        onCreateTodo(todoDesc)
        setTodoDesc('')
    }

    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.input}
                type="text"
                placeholder="Adicione uma nova tarefa"
                onChange={(e) => setTodoDesc(e.target.value)}
                value={todoDesc}
            />

            <button className={styles.button} onClick={handleCreateTodo}>
                Criar
                <PlusCircle />
            </button>
        </div>
    )
}