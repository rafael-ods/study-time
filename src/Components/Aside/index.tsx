import React, { ReactElement } from "react";
import style from './style.module.scss'

interface AsideProps {
  children: ReactElement;
  title: string;
}

const Aside = ({ children, title }: AsideProps) => {
  return (
    <aside className={style.container}>
      <h3 className={style.container__title}>{title}</h3>
      {children}
    </aside>
  );
};

export default Aside;
