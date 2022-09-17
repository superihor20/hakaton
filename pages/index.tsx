import type { NextPage } from 'next';
import { TableGroup } from '../components/tableGroup/tableGroup';
import { TableWithChair } from '../components/tableWithChair/tableWithChair';

const Home: NextPage = () => {
  return (
    <TableGroup>
      <TableWithChair id={1} />
      <TableWithChair id={2} typeDirection='reverse' />
      <TableWithChair id={3} typeDirection='right' />
    </TableGroup>
  );
};

export default Home;
