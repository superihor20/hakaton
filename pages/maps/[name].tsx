import { useRouter } from 'next/router';
import { maps, mapsMenuItems } from '../../src/constants/maps';
import { Loader } from '../../src/components/loader/Loader';
import { Box } from '../../src/components/box/Box';
import classes from '../../styles/maps-page.module.scss';
import { Button } from '../../src/components/button/Button';

const MapPage = ({}) => {
  const router = useRouter();
  const { name } = router.query;

  const MapComponent = maps.find((item) => item.name === name)?.map;

  return (
    <div className={classes.container}>
      <Box className={classes.menu} type="dark">
        <p className={classes.title}>ROOMS</p>
        <ul className={classes.list}>
          {mapsMenuItems.map((item) => (
            <Button
              className={item.name !== name ? classes.noActiveButton : ''}
              onClick={() => router.push(`/maps/${item.name}`)}
            >
              {item.label}
            </Button>
          ))}
        </ul>
      </Box>
      <Box className={classes.content}>{MapComponent ? <MapComponent /> : <Loader />}</Box>
    </div>
  );
};

export default MapPage;
