import React, { Children, FC, PropsWithChildren } from 'react';
import styles from './tableGroup.module.scss';

type TableGroupProps = {};

export const TableGroup: FC<PropsWithChildren<TableGroupProps>> = ({
  children,
}) => {
  return (
    <div
      className={`${styles.tableGroup} groupVariants${[
        Children.count(children),
      ]}`}
    >
      {children}
    </div>
  );
};
