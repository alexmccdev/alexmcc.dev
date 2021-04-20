import type { AppProps } from 'next/app'
import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'
import React from 'react'
import Head from 'next/head'
import 'styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main className="flex-1">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    )
}

export default MyApp
