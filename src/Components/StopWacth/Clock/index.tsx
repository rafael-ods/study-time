import style from './clock.module.scss'

const Clock = () => {
  return (
    <>
     <span className={style.number}>0</span>   
     <span className={style.number}>0</span>   
     <span className={style.ponto}>:</span>
     <span className={style.number}>0</span>   
     <span className={style.number}>0</span>   
    </>
  )
}

export default Clock
