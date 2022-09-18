import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UserService } from '../../src/services/UserService';
import { IUser } from '../../src/models/user';
import { SERVER_URL } from '../../src/constants/url';
import { Loader } from '../../src/components/loader/Loader';
import classes from '/styles/profile-page.module.scss';
import { Ihor } from '../../src/models/user.mock';

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  // const [user, setUser] = useState({} as IUser);
  const [user, setUser] = useState(Ihor);
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

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.avatar}>
            <img src={user.avatar} />
          </div>
          <div className={classes.info}>
            <p className={classes.fullName}>
              {user.lastName} {user.firstName}
            </p>
            <p className={classes.profession}>{user.profession}</p>
            <div className={classes.socials}>
              {user.instagram && (
                <a
                  className={classes.socialsItem}
                  href={user.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/instagram-black.png" alt="insta" className={classes.socialItemBlack} />
                  <div className={classes.socialsHover}>
                    <img
                      src="/instagram-colored.png"
                      alt="insta"
                      className={classes.socialItemColored}
                    />
                  </div>
                </a>
              )}
              {user.telegram && (
                <a
                  className={classes.socialsItem}
                  href={`https:/t.me/${user.telegram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/telegram-black.png" alt="telega" className={classes.socialItemBlack} />
                  <div className={classes.socialsHover}>
                    <img
                      src="/telegram-colored.png"
                      alt="telega"
                      className={classes.socialItemColored}
                    />
                  </div>
                </a>
              )}
              {user.linkedIn && (
                <a
                  className={classes.socialsItem}
                  href={user.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/linkedin-black.png" alt="insta" className={classes.socialItemBlack} />
                  <div className={classes.socialsHover}>
                    <img
                      src="/linkedin-colored.png"
                      alt="insta"
                      className={classes.socialItemColored}
                    />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
