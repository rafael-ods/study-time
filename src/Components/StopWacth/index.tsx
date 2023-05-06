import { ICardTask } from "../../Shared/ICardTask";
import Button from "../Button";
import Clock from "./Clock";
import style from "./style.module.scss";

interface StopWacthProops {
  selected: ICardTask[] | undefined
}

const StopWacth = ({ selected } : StopWacthProops) => {
  console.log(selected)
  return (
    <div className={style.container}>
      <p className={style.container__paragraph}>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={style.containerClock}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
};

export default StopWacth;
