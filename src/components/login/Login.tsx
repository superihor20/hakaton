import { FormEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { login } from '../../store/user';
import { AuthService } from '../../services/AuthService';
import { useAppDispatch } from '../../hooks/redux';
import classes from './login.module.scss';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (email.trim() && password.trim()) {
      const user = await AuthService.login(email, password);

      dispatch(login(user));
    } else {
      setError('Все поля обязательны!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        label="E-mail"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {!!error && <span className={classes.error}>{error}</span>}
      <Button variant="outlined" type="submit">
        Войти
      </Button>
    </form>
  );
};
