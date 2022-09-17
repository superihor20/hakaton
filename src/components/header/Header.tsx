import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useRouter } from 'next/router';
import { SERVER_URL } from '../../constants/url';
import classes from './Header.module.scss';
import { logout } from '../../store/user';
import { LogoIcon } from '../icons/LogoIcon';

export const Header = () => {
  const { user, isAuth } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const router = useRouter();

  return (
    <header className={classes.header}>
      <LogoIcon />

      {isAuth ? (
        <div className={classes.btn_group}>
          <div className={classes.profile} onClick={() => router.push(`/profile/${user.id}`)}>
            {user.avatar && <img className={classes.avatar} src={`${SERVER_URL}/${user.avatar}`} />}
            <span className={classes.text}>
              {user.firstName} {user.lastName[0]}
            </span>
          </div>
          <Button variant="text" onClick={() => dispatch(logout())}>
            Выйти
          </Button>
        </div>
      ) : (
        <Button variant="text" onClick={() => router.push('/login')}>
          Логин
        </Button>
      )}
    </header>
  );
};
