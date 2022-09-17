import { FC } from 'react';
import { TableGroup } from '../tableGroup/tableGroup';
import { TableWithChair } from '../tableWithChair/tableWithChair';
import styles from './openSpace.module.scss';

type OpenSpaceProps = {};

export const OpenSpace: FC<OpenSpaceProps> = () => {
  return (
    <div className={styles.openSpace}>
      <img src='./open-space.png' alt='open-space' style={{ zIndex: 0 }} />
      <TableGroup customStyles={{ position: 'absolute', bottom: 10, left: 10 }}>
        <TableWithChair id={1} />
        <TableWithChair id={2} typeDirection='reverse' />
      </TableGroup>

      <TableGroup
        customStyles={{ position: 'absolute', bottom: 130, left: 10 }}
      >
        <TableWithChair id={4} />
        <TableWithChair id={5} typeDirection='reverse' />
        <TableWithChair id={6} />
        <TableWithChair id={7} typeDirection='reverse' />
      </TableGroup>

      <TableGroup customStyles={{ position: 'absolute', top: 10, left: 10 }}>
        <TableWithChair id={8} />
        <TableWithChair id={9} typeDirection='reverse' />
        <TableWithChair id={10} />
        <TableWithChair id={11} typeDirection='reverse' />
      </TableGroup>

      <TableGroup
        customStyles={{ position: 'absolute', bottom: 130, right: 10 }}
      >
        <TableWithChair id={12} />
        <TableWithChair id={13} typeDirection='reverse' />
        <TableWithChair id={14} />
        <TableWithChair id={15} typeDirection='reverse' />
      </TableGroup>

      <TableGroup
        customStyles={{ position: 'absolute', bottom: 10, right: 10 }}
      >
        <TableWithChair id={16} />
        <TableWithChair id={17} typeDirection='reverse' />
        <TableWithChair id={18} />
        <TableWithChair id={19} typeDirection='reverse' />
        <TableWithChair id={20} />
        <TableWithChair id={21} typeDirection='reverse' />
      </TableGroup>
    </div>
  );
};
