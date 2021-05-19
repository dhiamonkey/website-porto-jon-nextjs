import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
<>
<Head>

    <title>Lewis - Creative Portfolio HTML Template - About Me</title>

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
        <header id="header" className="header header-fixed">
          <div className="container-fluid clearfix">
            <div className="brand">
              <a href="home-flash.html">
                <div className="brand-name text-texture">LW</div>
                <div className="brand-text">Crafting Digital<br /> Studio</div>
              </a>
            </div>

            <button className="nav-toggle-btn a-nav-toggle">
              <span className="nav-toggle-title">Menu</span>
              <span className="nav-toggle nav-toggle-sm">
                <span className="stick stick-1"></span>
                <span className="stick stick-2"></span>
                <span className="stick stick-3"></span>
              </span>
            </button>
          </div>

          <div className="hide-menu a-nav-toggle"></div>

          <div className="menu">
            <div className="menu-lang">
              <a href="#" className="menu-lang-item active">Eng</a>
              <a href="#" className="menu-lang-item">fra</a>
              <a href="#" className="menu-lang-item">ger</a>
            </div>

            <div className="menu-main" id="accordion">
              <ul>
                <li><a data-text="Home" data-toggle="collapse" href="#menuHome" role="button" aria-expanded="false" aria-controls="menuHome">Home</a>
                  <div className="collapse" id="menuHome" data-parent="#accordion">
                    <ul>
                      <li><a href="home-flash.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Flash">Flash</a></li>
                      <li><a href="home-horizontal.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Parallax Horizontal">Parallax Horizontal</a></li>
                      <li><a href="home-minimal.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Minimal">Minimal</a></li>
                      <li><a href="home-zoom.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Zoom Parallax Image">Zoom Parallax Image</a></li>
                      <li><a href="home-3d.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="3D Parallax">3D Parallax</a></li>
                      <li><a href="home-video.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Video Background">Video Background</a></li>
                      <li><a href="home-piling.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Parallax Piling">Parallax Piling</a></li>
                    </ul>
                  </div>
                </li>
                <li><a data-text="Works" data-toggle="collapse" href="#menuWorks" role="button" aria-expanded="false" aria-controls="menuWorks">Works</a>
                  <div className="collapse" id="menuWorks" data-parent="#accordion">
                    <ul>
                      <li><a href="work-grid.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Grid">Grid</a></li>
                      <li><a href="work-masonry.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Masonry">Masonry</a></li>
                      <li><a href="work-metro.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Metro">Metro</a></li>
                      <li><a href="work-listing.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Listing">Listing</a></li>
                      <li><a href="work-carousel.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Carousel">Carousel</a></li>
                      <li><a href="work-parallax.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Parallax">Parallax</a></li>
                      <li><a href="single-project-branding.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Project Branding">Single Project Branding</a></li>
                      <li><a href="single-project-photography.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Project Photography">Single Project Photography</a></li>
                      <li><a href="single-project-web-design.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Project Web Design">Single Project Web Design</a></li>
                      <li><a href="single-project-mobile-app.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Project Mobile App">Single Project Mobile App</a></li>
                    </ul>
                  </div>
                </li>
                <li><a data-text="News" data-toggle="collapse" href="#menuNews" role="button" aria-expanded="false" aria-controls="menuNews">News</a>
                  <div className="collapse" id="menuNews" data-parent="#accordion">
                    <ul>
                      <li><a href="news-grid.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Grid">Grid</a></li>
                      <li><a href="news-masonry.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Masonry">Masonry</a></li>
                      <li><a href="news-with-sidebar.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="News with sidebar">News with sidebar</a></li>
                      <li><a href="single-post-no-sidebar.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Post No Sidebar">Single Post No Sidebar</a></li>
                      <li><a href="single-post-with-sidebar.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Single Post With Sidebar">Single Post With Sidebar</a></li>
                    </ul>
                  </div>
                </li>
                <li className="active"><a data-text="Studio" data-toggle="collapse" href="#menuStudio" role="button" aria-expanded="true" aria-controls="menuStudio">Studio</a>
                  <div className="collapse show" id="menuStudio" data-parent="#accordion">
                    <ul>
                      <li><a href="about-us.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="About Us">About Us</a></li>
                      <li className="active"><a href="about-me.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="About Me">About Me</a></li>
                      <li><a href="our-team.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Our team">Our team</a></li>
                      <li><a href="career.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Career">Career</a></li>
                      <li><a href="career-detail.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Career Detail">Career Detail</a></li>
                      <li><a href="how-its-work.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="How its work">How its work</a></li>
                      <li><a href="service.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Service">Service</a></li>
                      <li><a href="coming-soon.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Coming soon">Coming soon</a></li>
                      <li><a href="404.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Page 404">Page 404</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="contact.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Contact">Contact</a></li>
              </ul>
            </div>

            <div className="menu-footer">
                <ul className="social social-rounded">
                  <li><a href="#"><i className="socicon-twitter"></i></a></li>
                  <li><a href="#"><i className="socicon-facebook"></i></a></li>
                  <li><a href="#"><i className="socicon-googleplus"></i></a></li>
                </ul>
              <div className="menu-copyright">&copy; 2019 <strong>LEWIS</strong>. All Rights Reserved.<br /> design by <strong>Logancee</strong></div>
            </div>
          </div>
        </header>


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
