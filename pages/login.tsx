import { Login } from '../src/components/login/Login';
import classes from '/styles/login-page.module.scss';

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <Login />
    </div>
  );
};

export default LoginPage;
