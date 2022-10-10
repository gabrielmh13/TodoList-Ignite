import styles from './Status.module.css'

interface StatusProps {
    text: string
    color: string
    quantity: string
}

export function Status({ text, color, quantity }: StatusProps) {
    return (
        <div className={styles.statusContainer}>
            <p className={color === 'blue' ? styles.textBlue : styles.textPurple}>{text}</p>
            <div className={styles.counterContainer}>
                {quantity}
            </div>
        </div>
    )
}