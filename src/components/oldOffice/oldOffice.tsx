import styles from '../openSpace/openSpace.module.scss';
import Image from 'next/image';
import { TableGroup } from '../tableGroup/tableGroup';
import { TableWithChair } from '../tableWithChair/tableWithChair';
import { LayoutWithUserCard } from '../layouts/layoutWithUserCard/layoutWithUserCard';

export const OldOffice = () => {
  return (
    <LayoutWithUserCard>
      <div className={styles.openSpace}>
        <Image
          src="/old-office.png"
          alt="old-office"
          style={{ zIndex: 0 }}
          width={683}
          height={368}
        />
        <TableGroup customStyles={{ position: 'absolute', bottom: 10, left: 10 }}>
          <TableWithChair id={21} />
          <TableWithChair id={22} typeDirection="reverse" />
        </TableGroup>

        <TableGroup customStyles={{ position: 'absolute', bottom: 130, left: 10 }}>
          <TableWithChair id={23} />
          <TableWithChair id={24} typeDirection="reverse" />
          <TableWithChair id={25} />
          <TableWithChair id={26} typeDirection="reverse" />
        </TableGroup>

        <TableGroup customStyles={{ position: 'absolute', top: 10, left: 10 }}>
          <TableWithChair id={27} />
          <TableWithChair id={28} typeDirection="reverse" />
          <TableWithChair id={29} />
          <TableWithChair id={30} typeDirection="reverse" />
        </TableGroup>

        <TableGroup customStyles={{ position: 'absolute', bottom: 130, right: 10 }}>
          <TableWithChair id={31} />
          <TableWithChair id={32} typeDirection="reverse" />
          <TableWithChair id={33} />
          <TableWithChair id={34} typeDirection="reverse" />
        </TableGroup>

        <TableGroup customStyles={{ position: 'absolute', bottom: 10, right: 10 }}>
          <TableWithChair id={35} />
          <TableWithChair id={36} typeDirection="reverse" />
          <TableWithChair id={37} />
          <TableWithChair id={38} typeDirection="reverse" />
          <TableWithChair id={39} />
          <TableWithChair id={30} typeDirection="reverse" />
        </TableGroup>
      </div>
    </LayoutWithUserCard>
  );
};
