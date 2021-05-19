import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
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
        </body>
      </Html>
    )
  }
}

export default MyDocument
