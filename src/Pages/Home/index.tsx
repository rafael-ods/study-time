import { useState} from 'react'
import Form from '../../Components/Form'
import StopWacth from '../../Components/StopWacth'
import Aside from '../../Components/Aside';
import style from './style.module.scss'
import CardTask from '../../Components/CardTask';
import { ICardTask } from '../../Shared/ICardTask';

const Home = () => {
  const [task, setTask] = useState<ICardTask[]>([]) 
  const [selected, setSelected] = useState<ICardTask[]>() 

  const newTasks = (tasks: ICardTask) => {
    setTask([...task, tasks])
  }

  const selectedTask = (taskSelected: ICardTask) => {
    setSelected([taskSelected])
    setTask(previousTask => previousTask.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }


  return (
    <main className={style.container}>
      <div>
        <Form addTask={(tasks) => newTasks(tasks)}/>
        <StopWacth selected={selected}/>
      </div>
      <Aside title='Estudos do dia'>
        <CardTask 
          cards={task}
          selectedTask={selectedTask}
        />
      </Aside>
    </main>
  )
}

export default Home
