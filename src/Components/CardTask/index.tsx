import { ICardTask } from "../../Shared/ICardTask";
import style from "./style.module.scss";

interface CardProps {
  cards: ICardTask[];
  selectedTask: (taskSelected: ICardTask) => void;
}

const CardTask = ({ cards, selectedTask }: CardProps) => {
  console.log(cards);
  return (
    <ul className={style.card}>
      {cards.map((card) => {
        return (
          <li
            className={`${style.card__item} ${card.selected ? style.itemActive : ''}`}
            key={card.id}
            onClick={() => {
              selectedTask({
                id: card.id,
                task: card.task,
                time: card.time,
                selected: false,
                completed: false,
              });
            }}
          >
            <h3 className={style.card__title}>{card.task}</h3>
            <span className={style.card__span}>{card.time}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default CardTask;
