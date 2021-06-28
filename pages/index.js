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
        


        <ul className="social social-fixed">
          <li><a href="https://www.linkedin.com/in/dhia-rizqullah/" target="blank"><i className="socicon-linkedin"></i></a></li>
          <li><a href="https://github.com/dhiamonkey" target="blank"><i className="socicon-github"></i></a></li>
          <li><a href="https://www.behance.net/dhiamuhammad" target="blank"><i className="socicon-behance"></i></a></li>
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
                        <div className="horizontal-service-item-descr text-grey">More than just a means of <strong>branding</strong>, these works are aimed to entice the emotion, shift the paradigm, and/or persuade the audience to take action.</div>
                        <div className="horizontal-service-item-more"><a className="btn btn-primary btn-sm" href="/aspiring-content">Learn more <i className="icon ion-ios-arrow-right"></i></a></div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="horizontal-service-item">
                        <div className="num">2.</div>
                        <div className="horizontal-service-item-photo"><img src="/img/Bank-note_Monochromatic.png" alt="" className="photo-position" /></div>
                        <div className="horizontal-service-item-title">Content that Sells</div>
                        <div className="horizontal-service-item-descr text-grey">Acquiring desired leads through contents that are data-driven, methodical &amp; meticuluosly researched.</div>
                        <div className="horizontal-service-item-more"><a className="btn btn-primary btn-sm" href="/selling-content">Learn more <i className="icon ion-ios-arrow-right"></i></a></div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="horizontal-service-item">
                        <div className="num">3.</div>
                        <div className="horizontal-service-item-photo photo3"><img src="/img/World-wide-web_Flatline.png" alt="" className="photo-position" /></div>
                        <div className="horizontal-service-item-title">Other Works</div>
                        <div className="horizontal-service-item-descr text-grey">From development, UI/UX &amp; photography.</div>
                        <div className="horizontal-service-item-more"><a className="btn btn-primary btn-sm" href="/other-works">Learn more <i className="icon ion-ios-arrow-right"></i></a></div>
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
                      <h2 className="font-teko h1">Get to know me better   </h2>
                    </div>
                    <div className="slide-body wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1.2s">
                        <h3 className="slide-title-sub font-teko">About Me</h3>
                        <div className="slide-descr">My work experiences, tools proficiency &amp; etc.</div>
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



 
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="js/jqueryInclude.js"></script>
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
