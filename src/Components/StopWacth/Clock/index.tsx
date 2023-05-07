import style from './clock.module.scss'

interface ClockProps {
  addTime: number | undefined 
}

const Clock = ({ addTime = 0 } : ClockProps) => {
  const minutos = Math.floor(addTime / 60);
  const segundos =  addTime % 60;

  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
 
  return (
    <>
     <span className={style.number}>{minutoDezena}</span>   
     <span className={style.number}>{minutoUnidade}</span>   
     <span className={style.ponto}>:</span>
     <span className={style.number}>{segundoDezena}</span>   
     <span className={style.number}>{segundoUnidade}</span>   
    </>
  )
}

export default Clock
