import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UserService } from '../../src/services/UserService';
import { IUser } from '../../src/models/user';
import { SERVER_URL } from '../../src/constants/url';
import { Loader } from '../../src/components/loader/Loader';
import classes from '/styles/profile-page.module.scss';
import styles from '../../src/components/userHoverCard/userHoverCard.module.scss';

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      (async function () {
        const user = await UserService.getOne(+id);

        setUser(user);

        setIsLoading(false);
      })();
    }
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <img className={classes.avatar} src={`${SERVER_URL}/${user.avatar}`} />
      <span className={classes.name}>
        {user.firstName} {user.lastName}
      </span>
      <span className={classes.profession}>{user.profession}</span>
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
  );
};

export default ProfilePage;
