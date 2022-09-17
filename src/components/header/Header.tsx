import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useRouter } from 'next/router';
import { SERVER_URL } from '../../constants/url';
import classes from './Header.module.scss';
import { logout } from '../../store/user';
import { LogoIcon } from '../icons/LogoIcon';
import { Button } from '../button/Button';

export const Header = () => {
  const { user, isAuth } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const router = useRouter();

  return (
    <header className={classes.header}>
      <button onClick={() => router.push('/')}>
        <LogoIcon />
      </button>

      {isAuth ? (
        <div className={classes.btn_group}>
          <div className={classes.profile} onClick={() => router.push(`/profile/${user.id}`)}>
            {user.avatar && <img className={classes.avatar} src={`${SERVER_URL}/${user.avatar}`} />}
            <span className={classes.text}>
              {user.firstName} {user.lastName[0]}
            </span>
          </div>
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        </div>
      ) : (
        <Button onClick={() => router.push('/login')}>Login</Button>
      )}
    </header>
  );
};
