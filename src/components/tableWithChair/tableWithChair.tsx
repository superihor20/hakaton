import Image from 'next/image';
import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { IUser } from '../../models/user';
import { Ihor } from '../../models/user.mock';
import { openUserCard } from '../../store/card';
import { UserHoverCard } from '../userHoverCard/userHoverCard';
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
  const dispatch = useAppDispatch();

  const user = id === 11 ? Ihor : ({} as IUser);

  const handleMouseEnter = () => {
    dispatch(openUserCard(user));
  };

  return (
    <div id={'' + id} className={styles.tableWithChair}>
      <Image src={`/${typeDirection}.png`} alt="normal" width={50} height={47} />
      {user.avatar && (
        <>
          <div
            className={`${styles.avatar} ${styles[`place-type__${typeDirection}`]}`}
            onMouseEnter={handleMouseEnter}
          >
            <Image src={user.avatar} alt={user.lastName} layout="fill" />
          </div>
        </>
      )}
    </div>
  );
};
