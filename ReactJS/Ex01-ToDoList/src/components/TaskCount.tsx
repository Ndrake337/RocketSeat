import styles from './TaskCount.module.css'

interface values{
    created: number;
    done: number
}

export function TaskCount({created, done}:values) {
    return(
        <div className={styles.wrapper}>
            <div className={styles.TaskContainer}>
                <div className={styles.TaskStatus}>
                    <strong className={styles.created}>Tarefas Criadas <span>{created}</span></strong>
                    <strong className={styles.done}>Concluídas <span>{done === 0 ? '0': ''.concat(done.toString(), ' de ', created.toString())}</span></strong>
                </div>
            </div>
        </div>
    )
}