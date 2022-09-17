import React, { Children, CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './tableGroup.module.scss';

type TableGroupProps = {
  styles?: CSSProperties;
};

export const TableGroup: FC<PropsWithChildren<TableGroupProps>> = ({
  children,
}) => {
  return (
    <div
      className={`${styles.tableGroup} ${
        styles[`groupVariants${Children.count(children)}`]
      }`}
    >
      {children}
    </div>
  );
};
