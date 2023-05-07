import { useState} from 'react'
import Form from '../../Components/Form'
import StopWacth from '../../Components/StopWacth'
import Aside from '../../Components/Aside';
import style from './style.module.scss'
import CardTask from '../../Components/CardTask';
import { ICardTask } from '../../Shared/ICardTask';

const Home = () => {
  const [task, setTask] = useState<ICardTask[]>([]) 
  const [selected, setSelected] = useState<ICardTask>() 

  const newTasks = (tasks: ICardTask) => {
    setTask([...task, tasks])
  }

  const selectedTask = (taskSelected: ICardTask) => {
    setSelected(taskSelected)
    setTask(previousTask => previousTask.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  const deleteTask = (id : ICardTask) => {
    setTask(task.filter(task => task.id !== id.id))
  }

  const finishedTask = () => {
    if(selected) {
      setSelected(undefined)
      setTask(previousTask => previousTask.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task
      }))
    }
  }

  return (
    <main className={style.container}>
      <div>
        <Form addTask={(tasks) => newTasks(tasks)}/>
        <StopWacth
          selected={selected}
          finishedTask={finishedTask}
        />
      </div>
      <Aside title='Estudos do dia'>
        <CardTask 
          cards={task}
          selectedTask={selectedTask}
          deleteTask={deleteTask}
        />
      </Aside>
    </main>
  )
}

export default Home
