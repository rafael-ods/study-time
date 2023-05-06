import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import style from "./style.module.scss";
import { ICardTask } from "../../Shared/ICardTask";
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  addTask: (task: ICardTask) => void;
}

const Form = ({ addTask }: FormProps) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");
  

  const handlePreventDefault = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({
      id: uuidv4(),
      task: task,
      time: time,
      selected: false,
      completed: false
    });
    console.log('previnindo', task, time)
    setTask("");
    setTime("00:00");
  };

  return (
    <form className={style.form} onSubmit={handlePreventDefault}>
      <Input
        required
        type="text"
        value={task}
        id="Adicione um novo estudo"
        label="Adicione um novo estudo"
        placeholder="O que você quer estudar"
        setValue={(value) => setTask(value)}
      />
      <Input
        required
        type="time"
        id="Tempo"
        label="Tempo"
        step="1"
        min="00:30:00"
        max="01:30:00"
        value={time}
        placeholder="O que você quer estudar"
        setValue={(value) => setTime(value)}
      />
      <Button type="submit">Criar tarefa</Button>
    </form>
  );
};

export default Form;
