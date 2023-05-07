import { ICardTask } from "../../Shared/ICardTask";
import style from "./style.module.scss";
import { BsJournalCheck } from "react-icons/bs";

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
            className={`${style.card__item} ${
              card.selected ? style.itemActive : ""
            } ${card.completed ? style.backgroundComplete : ""}`}
            key={card.id}
            onClick={() => {
                !card.completed && selectedTask({
                id: card.id,
                task: card.task,
                time: card.time,
                selected: false,
                completed: false,
              });
            }}
          >
            <div>
              <h3 className={style.card__title}>{card.task}</h3>
              <span className={style.card__span}>{card.time}</span>
            </div>
            <BsJournalCheck
              aria-label="Tarefa Completada"
              className={`${card.completed ? style.showIcon : style.icon}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CardTask;
