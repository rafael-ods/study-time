import  { ReactElement } from "react";
import style from "./style.module.scss";

interface ButtonProps {
  children: ReactElement | string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void
  disable?: boolean | undefined
}

const Button = ({ children, type = "button", onClick, disable }: ButtonProps) => {
  return (
    <button 
    onClick={onClick} 
    type={type}
    disabled={disable} 
    className={style.button}>
      {children}
    </button>
  );
};

export default Button;
