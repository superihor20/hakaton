import type { NextPage } from 'next';
import { LayoutWithUserCard } from '../src/components/layouts/layoutWithUserCard/layoutWithUserCard';
import { OpenSpace } from '../src/components/openSpace/openSpace';

const OpenSpacePage: NextPage = () => {
  return (
    <LayoutWithUserCard>
      <OpenSpace />
    </LayoutWithUserCard>
  );
};

export default OpenSpacePage;
