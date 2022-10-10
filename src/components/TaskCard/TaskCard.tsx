import { Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './TaskCard.module.css'

interface TaskCardProps {
    id: string
    name: string
    changeState: (id: string) => void
    deleteTodo: (id: string) => void
}

export function TaskCard({ id, name, changeState, deleteTodo }: TaskCardProps) {
    const [buttonState, setButtonState] = useState(false)

    function handleOnFinishTodo() {
        setButtonState(!buttonState)
        changeState(id)
    }

    function handleOnDeleteTodo() {
        deleteTodo(id)
    }

    return (
        <div className={styles.taskCard}>
            <button
                className={buttonState === false ? styles.finishButton : styles.finishButtonSelected}
                onClick={handleOnFinishTodo}
            >
                <div className={styles.mark}></div>
            </button>

            <p>{name}</p>
            <button className={styles.removeButton} onClick={handleOnDeleteTodo}>
                <Trash size={24} />
            </button>
        </div >
    )
}