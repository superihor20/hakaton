import { Grow, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { closeUserCard } from '../../store/card';
import styles from './userHoverCard.module.scss';

export const UserHoverCard: FC = () => {
  const { isVisible, user } = useAppSelector((state) => state.cardReducer);
  const dispatch = useAppDispatch();

  const closeCard = () => {
    dispatch(closeUserCard());
  };

  return (
    <Grow in={isVisible} style={{ background: '#fff', zIndex: 11 }}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src="/bg.png" alt="bg" />
          <img src={user.avatar} alt={user.lastName} className={styles.cardAvatar} />
          <img src="/close.png" alt="close" className={styles.close} onClick={closeCard} />
        </div>
        <div className={styles.cardContent}>
          <p className={styles.fullName}>
            {user.lastName} {user.firstName}
          </p>
          {user.profession && <p className={styles.profession}>{user.profession}</p>}
        </div>
        <div className={styles.socials}>
          {user.instagram && (
            <a
              className={styles.socialsItem}
              href={user.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/instagram-black.png" alt="insta" className={styles.socialItemBlack} />
              <div className={styles.socialsHover}>
                <img
                  src="/instagram-colored.png"
                  alt="insta"
                  className={styles.socialItemColored}
                />
              </div>
            </a>
          )}
          {user.telegram && (
            <a
              className={styles.socialsItem}
              href={`https:/t.me/${user.telegram}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/telegram-black.png" alt="telega" className={styles.socialItemBlack} />
              <div className={styles.socialsHover}>
                <img
                  src="/telegram-colored.png"
                  alt="telega"
                  className={styles.socialItemColored}
                />
              </div>
            </a>
          )}
          {user.linkedIn && (
            <a className={styles.socialsItem} href={user.linkedIn} target="_blank" rel="noreferrer">
              <img src="/linkedin-black.png" alt="insta" className={styles.socialItemBlack} />
              <div className={styles.socialsHover}>
                <img src="/linkedin-colored.png" alt="insta" className={styles.socialItemColored} />
              </div>
            </a>
          )}
        </div>
        <Link href="#">
          <MuiLink
            underline="hover"
            style={{
              margin: '0 auto',
              display: 'block',
              textAlign: 'center',
              marginBottom: '20px',
              cursor: 'pointer',
              width: 'max-content',
            }}
          >
            Open profile
          </MuiLink>
        </Link>
      </div>
    </Grow>
  );
};
