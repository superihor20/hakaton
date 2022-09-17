import type { NextPage } from 'next';
import { LayoutWithUserCard } from '../src/components/layouts/layoutWithUserCard/layoutWithUserCard';
import { OpenSpace } from '../src/components/openSpace/openSpace';

const Home: NextPage = () => {
  return (
    <LayoutWithUserCard>
      <OpenSpace />
    </LayoutWithUserCard>
  );
};

export default Home;
