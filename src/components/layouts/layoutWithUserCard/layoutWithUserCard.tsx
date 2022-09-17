import { FC, PropsWithChildren } from 'react';
import { UserHoverCard } from '../../userHoverCard/userHoverCard';
import styles from './layoutWithUserCard.module.scss';

export const LayoutWithUserCard: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.layoutWithUser}>
      {children}
      <UserHoverCard />
    </div>
  );
};
