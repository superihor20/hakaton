import type { NextPage } from 'next';
import { TableGroup } from '../components/tableGroup/tableGroup';
import { TableWithChair } from '../components/tableWithChair/tableWithChair';

const Home: NextPage = () => {
  return (
    <TableGroup>
      <TableWithChair id={1} />
      <TableWithChair id={2} typeDirection='reverse' />
      <TableWithChair id={3} />
      <TableWithChair id={4} typeDirection='reverse' />
    </TableGroup>
  );
};

export default Home;
