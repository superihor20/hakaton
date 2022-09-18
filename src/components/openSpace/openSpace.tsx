import Image from 'next/image';
import { FC } from 'react';
import { LayoutWithUserCard } from '../layouts/layoutWithUserCard/layoutWithUserCard';
import { TableGroup } from '../tableGroup/tableGroup';
import { TableWithChair } from '../tableWithChair/tableWithChair';
import styles from './openSpace.module.scss';

type OpenSpaceProps = {};

export const OpenSpace: FC<OpenSpaceProps> = () => {
  return (
    <LayoutWithUserCard>
      <div className={styles.openSpace}>
        <Image
          src="/open-space.png"
          alt="open-space"
          style={{ zIndex: 0 }}
          width={460}
          height={396}
        />
        <TableGroup customStyles={{ position: 'absolute', bottom: 10, left: 10 }}>
          <TableWithChair id={1} />
          <TableWithChair id={2} typeDirection="reverse" />
        </TableGroup>

        <TableGroup customStyles={{ position: 'absolute', bottom: 130, left: 10 }}>
          <TableWithChair id={3} />
          <TableWithChair id={4} typeDirection="reverse" />
          <TableWithChair id={5} />
          <TableWithChair id={6} typeDirection="reverse" />
        </TableGroup>

        <TableGroup customStyles={{ position: 'absolute', top: 10, left: 10 }}>
          <TableWithChair id={7} />
          <TableWithChair id={8} typeDirection="reverse" />
          <TableWithChair id={9} />
          <TableWithChair id={10} typeDirection="reverse" />
        </TableGroup>

        <TableGroup customStyles={{ position: 'absolute', bottom: 130, right: 10 }}>
          <TableWithChair id={11} />
          <TableWithChair id={12} typeDirection="reverse" />
          <TableWithChair id={13} />
          <TableWithChair id={14} typeDirection="reverse" />
        </TableGroup>

        <TableGroup customStyles={{ position: 'absolute', bottom: 10, right: 10 }}>
          <TableWithChair id={15} />
          <TableWithChair id={16} typeDirection="reverse" />
          <TableWithChair id={17} />
          <TableWithChair id={18} typeDirection="reverse" />
          <TableWithChair id={19} />
          <TableWithChair id={20} typeDirection="reverse" />
        </TableGroup>
      </div>
    </LayoutWithUserCard>
  );
};
