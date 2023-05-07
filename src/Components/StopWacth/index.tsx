import { useEffect, useState } from "react";
import { ICardTask } from "../../Shared/ICardTask";
import Button from "../Button";
import Clock from "./Clock";
import style from "./style.module.scss";
import { clockFormat } from "../../Common/utils/clock";


interface StopWacthProops {
  selected: ICardTask | undefined,
  finishedTask: () => void

}

const StopWacth = ({ selected, finishedTask } : StopWacthProops) => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if(selected?.time) {
      setTime(clockFormat(selected.time))
    }
  },[selected])

  const countDown = (count: number = 0) => {
    setTimeout(() => {
      if (count > 0) {
        setTime(count -1)
        return countDown(count - 1)
      }
      finishedTask()
    }, 1000)
  }

  return (
    <div className={style.container}>
      <p className={style.container__paragraph}>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={style.containerClock}>
        <Clock addTime={time} />
      </div>
      <Button onClick={() => countDown(time)}>
        Começar
      </Button>
    </div>
  );
};

export default StopWacth;
