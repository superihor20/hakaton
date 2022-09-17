import { Grow } from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './userHoverCard.module.scss';

export const UserHoverCard: FC = () => {
  const { isVisible, user } = useAppSelector((state) => state.cardReducer);

  return (
    <Grow in={isVisible} style={{ background: '#fff', zIndex: 11 }}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src="/bg.png" alt="bg" />
          <img src={user.avatar} alt={user.lastName} className={styles.cardAvatar} />
        </div>
        <div className={styles.cardContent}>
          <p className={styles.fullName}>
            {user.lastName} {user.firstName}
          </p>
          <p className={styles.profession}>{user.profession}</p>
        </div>
        <div className={styles.socials}>
          <div className={styles.socialsItem}>
            <img src="/instagram-black.png" alt="insta" className={styles.socialItemBlack} />
            <div className={styles.socialsHover}>
              <img src="/instagram-colored.png" alt="insta" className={styles.socialItemColored} />
            </div>
          </div>
          <div className={styles.socialsItem}>
            <img src="/telegram-black.png" alt="telega" className={styles.socialItemBlack} />
            <div className={styles.socialsHover}>
              <img src="/telegram-colored.png" alt="telega" className={styles.socialItemColored} />
            </div>
          </div>
          <div className={styles.socialsItem}>
            <img src="/linkedin-black.png" alt="insta" className={styles.socialItemBlack} />
            <div className={styles.socialsHover}>
              <img src="/linkedin-colored.png" alt="insta" className={styles.socialItemColored} />
            </div>
          </div>
        </div>
      </div>
    </Grow>
  );
};
