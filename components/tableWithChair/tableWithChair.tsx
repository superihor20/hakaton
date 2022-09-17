import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './tableWithChair.module.scss';

type TableWithChair = {
  id: number;
  styles?: CSSProperties;
  typeDirection?: 'normal' | 'reverse' | 'left' | 'right';
};

export const TableWithChair: FC<PropsWithChildren<TableWithChair>> = ({
  id,
  typeDirection = 'normal',
}) => {
  return (
    <div id={'' + id} className={styles.tableWithChair}>
      <img src={`/${typeDirection}.png`} alt='normal' />
    </div>
  );
};
