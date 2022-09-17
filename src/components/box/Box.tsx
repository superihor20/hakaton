import { FC, ReactNode } from 'react';
import classes from './Box.module.scss';
import { combineClasses } from '../../utils/classname';

interface BoxProps {
  className?: string;
  children: ReactNode;
  type?: 'light' | 'dark';
}

export const Box: FC<BoxProps> = ({ children, className, type = 'light' }) => {
  return (
    <div
      className={combineClasses(classes.container, type === 'dark' ? classes.dark : '', className)}
    >
      {children}
    </div>
  );
};
