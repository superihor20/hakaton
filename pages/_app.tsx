import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Head} from "next/document";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
        </>)
}

export default MyApp
