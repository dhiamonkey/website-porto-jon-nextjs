
import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps}) {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0" />
    <meta name="description" content="Lewis - Creative Portfolio HTML Template"/>
    <meta name="author" content="Paul, Logan Cee" />
    </Head>
    <Layout><Component {...pageProps} /></Layout>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="js/jqueryInclude.js"></script>
    <script src="js/smoothscroll.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/animsition.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/jquery.pagepiling.min.js"></script>
    <script src="js/isotope.pkgd.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/TweenMax.min.js"></script>
    <script src="js/ScrollMagic.min.js"></script>
    <script src="js/animation.gsap.min.js"></script>
    <script src="js/jquery.viewport.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/script.js"></script>
    <script src="js/custom.js"></script>
  </>
  )
}

export default MyApp
