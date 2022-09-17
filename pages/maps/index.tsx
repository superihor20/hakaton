import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MapsNames } from '../../src/constants/maps';

const MapsPage = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/maps/${MapsNames.OPEN_SPACE}`);
  }, []);

  return <></>;
};

export default MapsPage;
