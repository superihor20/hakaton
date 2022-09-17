import { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss';
import { combineClasses } from '../../utils/classname';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={combineClasses(classes.button, props.className)} />;
};