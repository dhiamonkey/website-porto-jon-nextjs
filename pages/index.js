import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
  <Head>
    

    <title>Dhiamuhammad - Portfolio</title>

    {/* <!-- CSS --> */}
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/animsition.min.css" rel="stylesheet" />
    <link href="css/owl.carousel.min.css" rel="stylesheet"/>
    <link href="css/owl.theme.default.min.css" rel="stylesheet" />
    <link href="css/socicon.css" rel="stylesheet" />
    <link href="css/ionicons.min.css" rel="stylesheet" />
    <link href="css/animate.min.css" rel="stylesheet"/>
    <link href="css/jquery.fancybox.min.css" rel="stylesheet"/>
    <link href="css/jquery.pagepiling.css" rel="stylesheet"/>

    {/* <!-- Main CSS --> */}
    <link href="css/style.css" rel="stylesheet"/>

    {/* <!-- Favicons --> */}
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
    <link rel="manifest" href="favicon/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    
  </Head>

  <div className="theme-orange">
    <div className="animsition">
      <div className="wrapper">
        <header id="header" className="header header-fixed">
          <div className="container-fluid clearfix">
            <div className="brand">
              <a href="#">
                <div className="brand-name text-texture">DM</div>
                <div className="brand-text">DhiaMuhammad.com</div>
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

            <div className="header-content d-none d-md-block">
              <div className="header-contacts">
                <div className="header-contact-divider">/</div>
                <div className="header-contact-item"><a href="tel:+00853462188" className="phone-link">+628 151 3933 509</a></div>
                <div className="header-contact-divider">/</div>
                <div className="header-contact-item"><a href="mailto:contact@lewisstudio.com" className="mail-link">dhiamuhammad@gmail.com</a></div>
              </div>
            </div>
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
                <li className="active"><a data-text="Home" data-toggle="collapse" href="#menuHome" role="button" aria-expanded="true" aria-controls="menuHome">Home</a>
                  <div className="collapse show" id="menuHome" data-parent="#accordion">
                    <ul>
                      <li><a href="home-flash.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Flash">Flash</a></li>
                      <li className="active"><a href="home-horizontal.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Parallax Horizontal">Parallax Horizontal</a></li>
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
                <li><a data-text="Studio" data-toggle="collapse" href="#menuStudio" role="button" aria-expanded="false" aria-controls="menuStudio">Studio</a>
                  <div className="collapse" id="menuStudio" data-parent="#accordion">
                    <ul>
                      <li><a href="about-us.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="About Us">About Us</a></li>
                      <li><a href="about-me.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="About Me">About Me</a></li>
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


        <ul className="social social-fixed">
          <li><a href="#"><i className="socicon-twitter"></i></a></li>
          <li><a href="#"><i className="socicon-facebook"></i></a></li>
          <li><a href="#"><i className="socicon-googleplus"></i></a></li>
        </ul>


        <div className="horizontal-nav">
            <div className="container">
                <ul id="menu">
                  <li data-menuanchor="Home" className="active"></li>
                  <li data-menuanchor="Works"></li>
                  <li data-menuanchor="About-me"></li>
                </ul>
            </div>
            <div className="horizontal-controls">
                <button className="a-pp-prev">prev</button>
                <span className="divider">|</span>
                <button className="a-pp-next">next</button>
            </div>
        </div>
    
        <div className="home-horizontal a-horizontal full-height">
          <div className="section pp-scrollable slide slide1 slide-dark">
            <div className="slide-container">            
              <div className="video-container a-video" data-vimeo-width="640" data-vimeo-height="360"><iframe src="https://player.vimeo.com/video/253112375?title=0&byline=0&portrait=0&autoplay=1&autopause=0&muted=1&background=1"   allowFullScreen></iframe></div>
              <div className="slide-bg"><div className="inside"></div></div>
              <div className="slide-video-container slide-container">
                <div className="container">
                  <div className="row slide-content">
                    <div className="col-sm-4">
                      <div className="slide-num num">01</div>
                      <h1 className="slide-title font-teko wow fadeInRight" data-wow-duration="1.2s">WELCOME TO<br /><span className="text-primary">MY PORTFOLIO</span><br /> WEBSITE</h1>
                      <div className="slide-body wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1.2s">
                        <h3 className="slide-title-sub font-teko">DHIA MUHAMMAD</h3>
                        <div className="slide-descr">A Story-Teller, Digital-Marketer &amp; Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section pp-scrollable slide slide2">
            <div className="slide-container">
              <div className="container">
                <div className="slide-num num">02</div>
                <div className="media-title">
                  <div className="align-self-center">
                    <h2 className="slide-title font-teko mb-0">My Works</h2>
                  </div>
                  <div className="align-self-center mb-2">
                    <div className="slide-descr slide-note">Here are some of best works categorized into 3 separate<br />  categories. Peek at one that interest you the most!</div>
                  </div>
                </div>
                <div className="slide-body">
                  <div className="row horizontal-service-list">
                    <div className="col-lg-4">
                      <div className="horizontal-service-item">
                        <div className="num">1.</div>
                        <div className="horizontal-service-item-photo"><img src="/img/Brainstorming session _Two Color.png" alt=""  className="photo-position" /> </div>
                        <div className="horizontal-service-item-title">Content that Aspires</div>
                        <div className="horizontal-service-item-descr text-grey">We build and activate brands throung cultural insight, strategic vision, and the power of emotion..</div>
                        <div className="horizontal-service-item-more"><a className="btn btn-primary btn-sm" href="/aspiring-content">Learn more <i className="icon ion-ios-arrow-right"></i></a></div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="horizontal-service-item">
                        <div className="num">2.</div>
                        <div className="horizontal-service-item-photo"><img src="/img/Bank-note_Monochromatic.png" alt="" className="photo-position" /></div>
                        <div className="horizontal-service-item-title">Content that Sells</div>
                        <div className="horizontal-service-item-descr text-grey">We build and activate brands throung cultural insight, strategic vision, and the power of emotion..</div>
                        <div className="horizontal-service-item-more"><a className="btn btn-primary btn-sm" href="service.html">Learn more <i className="icon ion-ios-arrow-right"></i></a></div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="horizontal-service-item">
                        <div className="num">3.</div>
                        <div className="horizontal-service-item-photo photo3"><img src="/img/World-wide-web_Flatline.png" alt="" className="photo-position" /></div>
                        <div className="horizontal-service-item-title">Other Works</div>
                        <div className="horizontal-service-item-descr text-grey">From development, UI/UX &amp; photography.</div>
                        <div className="horizontal-service-item-more"><a className="btn btn-primary btn-sm" href="service.html">Learn more <i className="icon ion-ios-arrow-right"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section pp-scrollable slide slide3 slide-dark">
            <div className="slide-container">
              <div className="slide-bg"><div className="inside"></div></div>
              <div className="container">
                <div className="row slide-content">
                  <div className="col-sm-4">
                    <div className="slide-num num">03</div>
                    <div className="slide-title">
                      <h2 className="font-teko h1">Learn More<br /> About Me</h2>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary mr-4" href="/about-me">My Background  <i className="icon ion-ios-arrow-right"></i></a>
              </div>
            </div>
          </div>

          {/* <div className="section pp-scrollable slide slide4">
            <div className="slide-container">
              <div className="container">
                <div className="slide-num num">04</div>
                <div className="media-title">
                  <div className="align-self-center">
                    <h2 className="slide-title font-teko mb-0">Our Clients</h2>
                  </div>
                  <div className="align-self-center mb-2">
                    <div className="slide-descr slide-note">Help business can be optimized profit and improve value<br /> of brand is our vision.</div>
                  </div>
                </div>

                <div className="slide-body">
                  <div className="row no-gutters partner-list partner-bordered">
                    <div className="col partner-item"><span className="inside"><Image width={500} height={500} src="img/pic12.png" alt="" /></span></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic13.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic14.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic15.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic16.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic17.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic18.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic20.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic21.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic22.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic23.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic24.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic25.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic26.png" alt="" /></a></div>
                    <div className="col partner-item"><a href="#" className="inside"><Image width={500} height={500} src="img/pic27.png" alt="" /></a></div>
                  </div> 
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="section pp-scrollable slide slide5 slide-dark">
            <div className="slide-container">
              <div className="slide-bg"><div className="inside"></div></div>
              <div className="container">
                <div className="row slide-content">
                  <div className="col-sm-6">
                    <div className="slide-num num">05</div>
                    <h2 className="slide-title font-teko h1"><span className="text-primary">New York,</span> USA</h2>
                    <div className="slide-body">
                      <div className="slide-contact-address">166 Main Street, Beverly Hills, CA 90210</div>
                      <div className="slide-contact-mail"><a href="#" className="underline">hello@lewisstudio.co</a></div>
                      <div className="slide-contact-phone"><a href="tel:+00853462188" className="phone-link">+0085 346 2188</a></div>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary mr-4" href="contact.html">Contact us <i className="icon ion-ios-arrow-right"></i></a>
              </div>
            </div>
          </div> */}

        </div>



      </div>

    </div>
    
    </div>
    
    


  

    </>
  )
}
