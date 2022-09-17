import Image from 'next/image';
import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import { Ihor } from '../../api/user/user.mock';
import { User } from '../../api/user/user.schema';
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
  const user = id === 11 ? Ihor : ({} as User);

  return (
    <div id={'' + id} className={styles.tableWithChair}>
      <Image
        src={`/${typeDirection}.png`}
        alt='normal'
        width={50}
        height={47}
      />
      {user.avatar && (
        <div
          className={`${styles.avatar} ${
            styles[`place-type__${typeDirection}`]
          }`}
        >
          <Image src={user.avatar} alt={user.lastName} layout='fill' />
        </div>
      )}
    </div>
  );
};
