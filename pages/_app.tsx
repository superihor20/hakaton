import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../src/components/header/Header';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
