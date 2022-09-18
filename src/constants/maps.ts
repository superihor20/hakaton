import { OpenSpace } from '../components/openSpace/openSpace';
import { OldOffice } from '../components/oldOffice/oldOffice';

export enum MapsNames {
  OPEN_SPACE = 'open-space',
  OLD_OFFICE = 'old-office',
}

export const mapsMenuItems = [
  { id: 1, name: MapsNames.OPEN_SPACE, label: 'Open Space' },
  { id: 2, name: MapsNames.OLD_OFFICE, label: 'OLD OFFICE' },
];

export const maps = [
  {
    name: MapsNames.OPEN_SPACE,
    map: OpenSpace,
  },
  {
    name: MapsNames.OLD_OFFICE,
    map: OldOffice,
  },
];
