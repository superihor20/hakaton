import React, { Children, CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './tableGroup.module.scss';

type TableGroupProps = {
  customStyles?: CSSProperties;
};

export const TableGroup: FC<PropsWithChildren<TableGroupProps>> = ({
  children,
  customStyles,
}) => {
  return (
    <div
      className={`${styles.tableGroup} ${
        styles[`groupVariants${Children.count(children)}`]
      }`}
      style={customStyles || {}}
    >
      {children}
    </div>
  );
};
