import { FormEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { login } from '../../store/user';
import { AuthService } from '../../services/AuthService';
import { useAppDispatch } from '../../hooks/redux';

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
    <form onSubmit={handleSubmit}>
      <TextField
        label='E-mail'
        variant='outlined'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label='Password'
        variant='outlined'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {!!error && <span>{error}</span>}
      <Button variant='outlined' type='submit'>
        Outlined
      </Button>
    </form>
  );
};