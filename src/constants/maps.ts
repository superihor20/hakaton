import { OpenSpace } from '../components/openSpace/openSpace';

export enum MapsNames {
  OPEN_SPACE = 'open-space',
  // TEST1 = 'test 1',
}

export const mapsMenuItems = [
  { id: 1, name: MapsNames.OPEN_SPACE, label: 'Open Space' },
  // { id: 2, name: MapsNames.TEST1, label: 'TEST 1' },
];

export const maps = [
  {
    name: MapsNames.OPEN_SPACE,
    map: OpenSpace,
  },
];
