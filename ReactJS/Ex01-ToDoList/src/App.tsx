import  "./global.css";
import  styles  from "./App.module.css";
import { Header } from "./components/Header";
import { TaskCount } from "./components/TaskCount";
import { Task } from "./components/Task";
import { useState } from "react";
import { Input } from "./components/Input";
import clipboard from './assets/Clipboard.svg'

interface iTask{
  id: number;
  Task: string;
  status: boolean;
}

export function App() {

  const [TaskList, setTaskList] = useState<iTask[]>([])

  function createTask(Task:string){
    const id = TaskList.length === 0 ? 1 :  TaskList[TaskList.length -1 ].id + 1
    const newTask:iTask = {id, Task, status:false}
    setTaskList([...TaskList, newTask])
  }

  function completeTask(id:number){
    const updatedTasks = TaskList.map(task => {
      if(task.id === id){
        task.status = !task.status
      }
      return(task)
    })
    setTaskList(updatedTasks)
  }

  function deleteTask(id: number){
    const updatedTasks = TaskList.filter(task => {
      return task.id !== id
    })
    setTaskList(updatedTasks)
  }

  const completedTask = TaskList.filter(task => {
      return task.status === true
    })
  
  return (
    <div className={styles.mainDiv}>
      <Header/>
      <Input onCreateTask={createTask}/>
      <TaskCount created={TaskList.length} done={completedTask.length} />
      <div className={styles.ListContainer}>
            {TaskList.length === 0 &&
              <div className={styles.Empty}>
                <img src={clipboard} alt='' className={styles.Clipboard}/>
                <div className={styles.textBox}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
            }
            {TaskList.map(task => {
                return(<Task 
                    key={task.id}
                    id={task.id}
                    task={task.Task}
                    status={task.status}
                    onCompleteTask={completeTask}
                    onDeleteTask={deleteTask}
                />)
            })}
        </div>
    </div>
  )
}


