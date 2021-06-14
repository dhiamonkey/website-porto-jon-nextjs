import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
<>
<Head>

    <title>Dhia's Portfolio  - About Me</title>

    {/* <!-- CSS --> */}
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/animsition.min.css" rel="stylesheet"/>
    <link href="css/owl.carousel.min.css" rel="stylesheet"/>
    <link href="css/owl.theme.default.min.css" rel="stylesheet"/>
    <link href="css/socicon.css" rel="stylesheet"/>
    <link href="css/ionicons.min.css" rel="stylesheet"/>
    <link href="css/animate.min.css" rel="stylesheet"/>
    <link href="css/jquery.fancybox.min.css" rel="stylesheet"/>

    {/* <!-- Main CSS --> */}
    <link href="css/style.css" rel="stylesheet"/>

    {/* <!-- Favicons --> */}
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
    <link rel="manifest" href="favicon/site.webmanifest"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"/>

</Head>

  <div className="theme-orange fixed-footer fixed-footer-lg">
    <div className="animsition">
      <div className="wrapper parallax-start">


        <div className="section section-content section-centered full-height full-image-dark text-white" style={{backgroundImage: 'url(img/bg-about-me2.jpg)'}}>
          <div className="section-item">
            <div className="container">
              <div className="next-title mb55 wow fadeInUp"><strong>freelance digital designer</strong></div>
              <h1 className="h1-lg font-libre mb60 wow fadeInUp" data-wow-delay=".2s"><strong>Hi! I’m Roberto<br /> Glad to see you here</strong></h1>
              <a href="#" className="btn btn-primary btn-sm mt50 wow fadeInUp" data-wow-delay=".4s">work with me <i className="icon ion-ios-email-outline"></i></a>
            </div>
          </div>
        </div>

        <div className="section change-header">
          <div className="container">
            <div className="section-item text-left">
              <div className="row">
                <div className="col-md-5 mb-2">
                  <h2 className="mb-1 font-libre fs30">Roberto Firmino</h2>
                  <div className="section-item-title-xs-narrow text-primary">THe story of Pixel</div>
                </div>
                <div className="col-md-7">
                  <div className="fs18 text-grey">
                    <div className="row row-60">
                      <div className="col-lg-6 mt5">
                        My job is to build your website so that it is functional and user friendly but at the same time attractive. My aim is to bring across your message and identity in the most creative way.
                      </div>
                      <div className="col-lg-6 mt5">
                        I enjoy turning complex problems into simple, beautiful and intuitive interface designs. When I'm not coding or pushing pixels, you'll find me in the pool or on the court shooting hoops.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-item text-left">
              <div className="row">
                <div className="col-md-5 mb-2">
                  <h2 className="mb-1 font-libre fs30">Services</h2>
                  <div className="section-item-title-xs-narrow text-primary">solutions for your business</div>
                </div>
                <div className="col-md-7">
                  <div className="fs18 text-grey mt5">It's time to bring it all together. Nothing is more rewarding for me than making great work for clients with meaningful missions.</div>
                  <div className="mt55 row">
                    <div className="col-md-4 col-6">
                      <ul className="nav flex-column text-uppercase fs14 text-bold">
                        <li className="nav-item">
                          <a className="active" href="#">Logo Design</a>
                        </li>
                        <li className="nav-item active">
                          <a href="#">Brand Guide</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Package Design</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Poster design</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 col-6">
                      <ul className="nav flex-column text-uppercase fs14 text-bold">
                        <li className="nav-item">
                          <a href="#">Flayer design</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Advertising</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Web design</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">web advertising</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 col-6">
                      <ul className="nav flex-column text-uppercase fs14 text-bold">
                        <li className="nav-item">
                          <a href="#">Icon design</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Illustration</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Photography</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Seo</a>
                        </li>
                      </ul>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div className="section-item text-left">
              <div className="row">
                <div className="col-md-5 mb-2">
                  <h2 className="mb-1 font-libre fs30">Skills</h2>
                  <div className="section-item-title-xs-narrow text-primary">what i am best at</div>
                </div>
                <div className="col-md-7 mt-3">
                  <div className="a-progressbar">
                    <div className="mb20">
                      <div className="text-uppercase mb-2">Web Design</div>
                      <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><div className="progress-value">90%</div></div>
                      </div>
                    </div>
                    <div className="mb20">
                      <div className="text-uppercase mb-2">branding</div>
                      <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><div className="progress-value">70%</div></div>
                      </div>
                    </div>
                    <div className="mb20">
                      <div className="text-uppercase mb-2">animation / motion</div>
                      <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><div className="progress-value">85%</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-item text-left">
              <div className="row">
                <div className="col-md-5 mb-2">
                  <h2 className="mb-1 font-libre fs30">Awards &amp; Press</h2>
                  <div className="section-item-title-xs-narrow text-primary">my achievements</div>
                </div>
                <div className="col-md-7">
                  <div className="fs18 text-grey mt5">It's always good to receive positive and constructive feedback for your work - from clients and moreover, from designers!</div>

                  <div className="mt55">
                    <div className="row align-items-center mb35 wow fadeInRight" data-wow-delay=".2s">
                      <div className="col-sm-2"><div className="text-grey-light">2019</div></div>
                      <div className="col-sm-4"><img src="img/pic152.png" alt="" className="img-fluid mb5" /></div>
                      <div className="col-sm-6"><div className="text-uppercase">Featured Portfolio Websites</div></div>
                    </div>

                    <div className="row align-items-center mb35 wow fadeInRight" data-wow-delay=".3s">
                      <div className="col-sm-2"><div className="text-grey-light">2018</div></div>
                      <div className="col-sm-4"><img src="img/pic153.png" alt="" className="img-fluid mb5" /></div>
                      <div className="col-sm-6"><div className="text-uppercase">Top 10 Design</div></div>
                    </div>

                    <div className="row align-items-center mb35 wow fadeInRight" data-wow-delay=".4s">
                      <div className="col-sm-2"><div className="text-grey-light">2017</div></div>
                      <div className="col-sm-4"><img src="img/pic154.png" alt="" className="img-fluid mb5" /></div>
                      <div className="col-sm-6"><div className="text-uppercase">Website Inspiration</div></div>
                    </div>

                    <div className="row align-items-center mb35 wow fadeInRight" data-wow-delay=".5s">
                      <div className="col-sm-2"><div className="text-grey-light">2017</div></div>
                      <div className="col-sm-4"><img src="img/pic155.png" alt="" className="img-fluid mb5" /></div>
                      <div className="col-sm-6"><div className="text-uppercase">Creative Things</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

      <div className="footer">
        <div className="footer-flash-about home-flash-dark">
          <div className="container">
            Tell us more about what you want to accomplish with your organisation. We help you think of possible solutions in an ever-changing digital world.
            <div className="mt-4"><a href="mailto:hello@lewisstudio.co" className="underline"><strong>hello@lewisstudio.co</strong></a></div>
          </div>
        </div>

        <div className="home-flash-dark pt-0 pb-0"><div className="container"><hr className="mt-0 mb-0"></hr></div>

        <div className="footer-flash home-flash-dark">
          <div className="container">
            <div className="footer-content-flash">
              <div className="row">
                <div className="col-md-4 col-6 mb-5">
                  <h5>Office</h5>
                  <div className="contact-item">166 Main Street, Beverly Hills,<br /> CA,&nbsp;90210</div>
                  <div className="contact-item"><a href="mailto:hello@lewisstudio.co">hello@lewisstudio.co</a></div>
                  <div className="contact-item"><a href="tel:+00853462188" className="phone-link">+0085 346 2188</a></div>
                </div>

                <div className="col-md-3 col-6 mb-5">
                  <h5>help</h5>
                  <ul className="footer-nav">
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Services</a></li>
                  </ul>
                </div>

                <div className="col-md-2 col-6 mb-5">
                  <h5>quick links</h5>
                  <ul className="footer-nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </div>

                <div className="col-md-3 col-6 mb-5">
                  <ul className="social social-rounded">
                    <li><a href="#"><i className="socicon-twitter"></i></a></li>
                    <li><a href="#"><i className="socicon-facebook"></i></a></li>
                    <li><a href="#"><i className="socicon-googleplus"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="site-info">
              <div className="row">
                <div className="col-6">
                  <div className="copyright text-left">&copy; 2019 <strong>LEWIS</strong>. All Rights Reserved.</div>
                </div>
                <div className="col-6">
                  <div className="text-right">Design by <strong><a href="#">Logan Cee</a></strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
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
    <script src="js/about.js"></script>
    </div>
</>
    )
}
