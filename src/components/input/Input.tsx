import { InputHTMLAttributes } from 'react';
import { combineClasses } from '../../utils/classname';
import classes from './Input.module.scss';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={combineClasses(props.className, classes.input)} />;
};
