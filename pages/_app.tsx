import Head from 'next/head'
import React from 'react'
import { RecoilRoot } from 'recoil'
// import { Layout } from 'src/Layout'
// import { GlobalStyle } from 'src/styles/GlobalStyle'
// import '../styles/gou.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        {/* <GlobalStyle /> */}
        {/* <Layout> */}
        <Head>
          <title>Wordbook</title>
          <meta charSet="utf-8" />
        </Head>
        <Component {...pageProps} />
        {/* </Layout> */}
      </RecoilRoot>
    </>
  )
}

export default MyApp
