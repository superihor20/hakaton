import { FormEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { login } from '../../store/user';
import { AuthService } from '../../services/AuthService';
import { useAppDispatch } from '../../hooks/redux';
import classes from './Login.module.scss';
import { useRouter } from 'next/router';

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

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        label="Login"
        type="text"
        variant="outlined"
        value={userLogin}
        onChange={(event) => setUserLogin(event.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {!!error && <span className={classes.error}>{error}</span>}
      <Button variant="outlined" type="submit">
        Login
      </Button>
    </form>
  );
};
