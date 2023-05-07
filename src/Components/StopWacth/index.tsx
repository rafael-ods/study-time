import { useEffect, useState } from "react";
import { ICardTask } from "../../Shared/ICardTask";
import Button from "../Button";
import Clock from "./Clock";
import style from "./style.module.scss";
import { clockFormat } from "../../Common/utils/clock";

interface StopWacthProops {
  selected: ICardTask | undefined
}

const StopWacth = ({ selected } : StopWacthProops) => {
  const [time, setTime] = useState<number>()


  useEffect(() => {
    if(selected?.time) {
      setTime(clockFormat(selected.time))
    }
  },[selected])

  console.log(selected)
  return (
    <div className={style.container}>
      <p className={style.container__paragraph}>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={style.containerClock}>
        <Clock addTime={time} />
      </div>
      <Button>Começar</Button>
    </div>
  );
};

export default StopWacth;
