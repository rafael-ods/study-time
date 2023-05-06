import  { ReactElement } from "react";
import style from "./style.module.scss";

interface ButtonProps {
  children: ReactElement | string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, type = "button" }: ButtonProps) => {
  return (
    <button type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
