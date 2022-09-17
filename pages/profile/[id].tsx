import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UserService } from '../../src/services/UserService';
import { IUser } from '../../src/models/user';
import { SERVER_URL } from '../../src/constants/url';
import { Loader } from '../../src/components/loader/Loader';
import classes from '/styles/profile-page.module.scss';

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
      <img src={`${SERVER_URL}/${user.avatar}`} />
      <span>
        {user.firstName} {user.lastName}
      </span>
      <span>{user.profession}</span>
    </div>
  );
};

export default ProfilePage;
