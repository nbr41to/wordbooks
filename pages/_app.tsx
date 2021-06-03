import { StylesProvider } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Header } from '../src/components/layout/Header';
import { Menu } from '../src/components/layout/Menu';
// import { Layout } from 'src/Layout'
import { GlobalStyle } from '../src/styles/GlobalStyle';
// import '../styles/gou.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <StylesProvider injectFirst>
          <GlobalStyle />
          {/* <Layout> */}
          <Head>
            <title>Wordbook</title>
            <meta charSet="utf-8" />
          </Head>
          <Header />
          <Menu />
          <Component {...pageProps} />
          {/* </Layout> */}
        </StylesProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
