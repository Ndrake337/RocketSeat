import styles from './Task.module.css'
import {Trash, Circle, Check} from 'phosphor-react'
import { useState } from 'react';

interface iTask{
    id: number;
    task: string;
    status: boolean;
    onCompleteTask: (id: number) => void
    onDeleteTask: (id: number) => void
}

export function Task({id ,status, task, onCompleteTask, onDeleteTask} : iTask) {
    
    function handleCompleteTask(){
        onCompleteTask(id)
    }

    function handleDeleteTask(){
        onDeleteTask(id)
    }
    return(
        <div className={styles.TaskContainer}>
            {status === false ? <div className={styles.Todo} onClick={handleCompleteTask}/> : <Check className={styles.Done} onClick={handleCompleteTask}/>}
            <p className={status === false ? styles.ToBeDone : styles.Completed }>{task}</p>
            <div className={styles.TrashWrapper} onClick={handleDeleteTask}><Trash size={16}/></div>
        </div>
    )
}