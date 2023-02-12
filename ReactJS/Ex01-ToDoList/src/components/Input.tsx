import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'
import { FormEvent, ChangeEvent, useState } from 'react'
interface InputProps{
    onCreateTask: (comment: string) => void;
}

export function Input( {onCreateTask}: InputProps ) {
    const [newTaskDescription, setNewTaskDescription] = useState('')

    function handleNewTaskInput(event: ChangeEvent<HTMLTextAreaElement>){
        setNewTaskDescription(event.target.value)
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
        onCreateTask(newTaskDescription)
        setNewTaskDescription('')
    }

    return(
        <form className={styles.InputWrapper} onSubmit={handleCreateNewTask}>
            <textarea name='comment' 
                className={styles.FormText} 
                placeholder='Adicione uma nova tarefa' 
                value={newTaskDescription} 
                onChange={handleNewTaskInput} 
                required
            />
            <button type="submit">Criar <PlusCircle size={16}/> </button>
        </form>
    )
}