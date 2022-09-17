import type { NextPage } from 'next';
import { TableGroup } from '../components/tableGroup/tableGroup';
import { TableWithChair } from '../components/tableWithChair/tableWithChair';

const Home: NextPage = () => {
  return (
    <TableGroup>
      <TableWithChair id={1} styles={{ padding: 10 }} />
    </TableGroup>
  );
};

export default Home;
