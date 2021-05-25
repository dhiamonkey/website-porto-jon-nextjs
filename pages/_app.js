
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps}) {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0" />
    <meta name="description" content="Lewis - Creative Portfolio HTML Template"/>
    <meta name="author" content="Paul, Logan Cee" />
    </Head>
    <Component {...pageProps} />
    
  </>
  )
}

export default MyApp
