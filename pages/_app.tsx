import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../src/components/header/Header';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';
import { useEffect, useRef, useState } from 'react';
import { LoadingScreen } from '../src/components/loadingScreen/LoadingScreen';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    timer.current = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Provider store={store}>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
          </>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
