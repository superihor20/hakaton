import classes from './LoadingScreen.module.scss';
import { LogoIcon } from '../icons/LogoIcon';
import { HorizonLoader } from '../horizonLoader/HorizonLoader';

export const LoadingScreen = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <LogoIcon />
        <HorizonLoader />
      </div>
    </div>
  );
};
