import React from "react";
import style from './style.module.scss';

interface InputProps {
  id: string;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  label: string;
  value: string;
  required?: boolean;
  placeholder: string;
  setValue: (value: string) => void;
}

const Input = ({
  id,
  min,
  max,
  step,
  type,
  label,
  value,
  setValue,
  required = false,
  placeholder,
}: InputProps) => {
  return (
    <div className={style.formGroup}>
      <label className={style.formGroup__label} htmlFor={label}>{label}</label>
      <input
        className={style.formGroup__input}
        id={label}
        type={type}
        value={value}
        step={step}
        min={min}
        max={max}
        required={required}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
