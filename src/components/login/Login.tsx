import { FormEvent, useEffect, useState } from 'react';
import { login } from '../../store/user';
import { AuthService } from '../../services/AuthService';
import { useAppDispatch } from '../../hooks/redux';
import classes from './Login.module.scss';
import { useRouter } from 'next/router';
import { Input } from '../input/Input';
import { Button } from '../button/Button';

export const Login = () => {
  const router = useRouter();
  const [userLogin, setUserLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (userLogin.trim() && password.trim()) {
      try {
        const user = await AuthService.login(userLogin, password);

        dispatch(login(user));

        await router.push('/');

        await router.push('/');
      } catch (error) {
        setError('Пользователь не найден');
      }
    } else {
      setError('Все поля обязательны!');
    }
  };

  useEffect(() => {
    setError('');
  }, [userLogin, password]);

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.field}>
        <span className={classes.label}>LOGIN:</span>
        <Input
          type="text"
          value={userLogin}
          onChange={(event) => setUserLogin(event.target.value)}
        />
      </div>
      <div className={classes.field}>
        <div className={classes.label}>PASSWORD:</div>
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {!!error && <span className={classes.error}>{error}</span>}
      <Button type="submit">Login</Button>
    </form>
  );
};
