import Head from 'next/head'

const portoData = [{
  title: 'Video Ali',
  category: 'Instagram short vidoe',
  size: {width: '20vw', height: '520px'},
},
{
  title: 'Video Ali',
  category: 'Instagram short vidoe',
  size: {width: '40vw', height: '520px'},
},
{
  title: 'Video Ali',
  category: 'Instagram short vidoe',
  size: {width: '64vw', height: '520px'},
}
]

function ThumbnailSize (props) {
  return (
    <div style={props.portoData.size} className="grid-item porto-margin category-mobile category-animation wow fadeInUp" data-wow-delay=".1s">
                <a href="single-project-branding.html">
                  <div className="project-item" style={{backgroundColor: '#e96437'}}>
                    <div className="project-metro-photo"><img src="img/pic62.jpg" alt="" /></div>
                    <div className="project-metro-date">2018</div>
                    <div className="project-metro-detail">
                      <h2 className="project-metro-title font-abril">{props.portoData.title}</h2>
                      <div className="project-metro-category">{props.portoData.category}</div>
                    </div>
                  </div>
                </a>
              </div>
  )
}

export default function AspiringContent() {
    return(
<>
  <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"/>
    <meta name="description" content="Lewis - Creative Portfolio HTML Template" />
    <meta name="author" content="Paul, Logan Cee" />

    <title>Lewis - Creative Portfolio HTML Template - Work Metro</title>

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
      <div className="wrapper">
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
                <li className="active"><a data-text="Works" data-toggle="collapse" href="#menuWorks" role="button" aria-expanded="true" aria-controls="menuWorks">Works</a>
                  <div className="collapse show" id="menuWorks" data-parent="#accordion">
                    <ul>
                      <li><a href="work-grid.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Grid">Grid</a></li>
                      <li><a href="work-masonry.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Masonry">Masonry</a></li>
                      <li className="active"><a href="work-metro.html" className="animsition-link" data-animsition-out-class="fade-out" data-text="Metro">Metro</a></li>
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


        <div className="section section-content">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-10">
                <h3 className="section-item-title-xs">featured works</h3>
                <h1 className="h2-flash font-abril">Bigger, Bolder &amp; Better</h1>

                <ul className="nav nav-inline parallax-link a-grid-filter">
                  <li className="nav-item active"><a data-filter="*" data-text="All">All</a></li>
                  <li className="nav-item"><a data-filter=".category-web" data-text="Web Design">Web Design</a></li>
                  <li className="nav-item"><a data-filter=".category-branding" data-text="Branding">Branding</a></li>
                  <li className="nav-item"><a data-filter=".category-animation" data-text="Animation">Animation</a></li>
                  <li className="nav-item"><a data-filter=".category-mobile" data-text="Mobile Design">Mobile Design</a></li>
                  <li className="nav-item"><a data-filter=".category-photography" data-text="Photography">Photography</a></li>
                </ul>
              </div>
            </div>

            <div className="project-list-metro a-grid row">
             {portoData.map((item, index) => <ThumbnailSize key={index} portoData={item}/>)} 
              {/* <div className="grid-item category-web category-branding col-md-6 col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                <a href="single-project-branding.html">
                  <div className="project-item" style={{backgroundColor: '#191a1e'}}>
                    <div className="project-metro-photo"><img src="img/pic63.jpg" alt="" /></div>
                    <div className="project-metro-date">2018</div>
                    <div className="project-metro-detail">
                      <h2 className="project-metro-title font-abril">Dark Bottle Packagin</h2>
                      <div className="project-metro-category">Branding <span className="divider">&bull;</span> Web Design</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="grid-item category-web col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                <a href="single-project-web-design.html">
                  <div className="project-item" style={{backgroundColor: '#2b1770'}}>
                    <div className="project-metro-photo"><img src="img/pic64.jpg" alt="" /></div>
                    <div className="project-metro-date">2018</div>
                    <div className="project-metro-detail">
                      <h2 className="project-metro-title font-abril">Onne Portfolio Site</h2>
                      <div className="project-metro-category">Website</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="grid-item category-photography category-branding category-web col-md-6 col-lg-8 wow fadeInUp" data-wow-delay=".1s">
                <a href="single-project-web-photography.html">
                  <div className="project-item" style={{backgroundColor: '#819823'}}>
                    <div className="project-metro-photo"><img src="img/pic65.jpg" alt="" /></div>
                    <div className="project-metro-date">2018</div>
                    <div className="project-metro-detail">
                      <h2 className="project-metro-title font-abril">Boranito Skate Store Online</h2>
                      <div className="project-metro-category">Website, Branding, photography</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="grid-item category-branding category-animation col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <a href="single-project-branding.html">
                  <div className="project-item" style={{backgroundColor:'#b18e36'}}>
                    <div className="project-metro-photo"><img src="img/pic66.jpg" alt="" /></div>
                    <div className="project-metro-date">2018</div>
                    <div className="project-metro-detail">
                      <h2 className="project-metro-title font-abril">Rick Meyeres</h2>
                      <div className="project-metro-category">Branding, Motion</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="grid-item category-branding col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".1s">
                <a href="single-project-branding.html">
                  <div className="project-item" style={{backgroundColor:'#fa8d18'}}>
                    <div className="project-metro-photo"><img src="img/pic67.jpg" alt="" /></div>
                    <div className="project-metro-date">2018</div>
                    <div className="project-metro-detail">
                      <h2 className="project-metro-title font-abril">ICO Bottle Opener</h2>
                      <div className="project-metro-category">Branding</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="grid-item category-mobile category-animation col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <a href="single-project-mobile-app.html">
                  <div className="project-item" style={{backgroundColor: '#846d96'}}>
                    <div className="project-metro-photo"><img src="img/pic68.jpg" alt="" /></div>
                    <div className="project-metro-date">2018</div>
                    <div className="project-metro-detail">
                      <h2 className="project-metro-title font-abril">Brole Movies App</h2>
                      <div className="project-metro-category">Mobile App, animation</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="grid-item category-mobile category-animation col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                <a href="single-project-mobile-app.html">
                  <div className="project-item" style={{backgroundColor : '#56362e'}}>
                    <div className="project-metro-photo"><img src="img/pic69.jpg" alt="" /></div>
                    <div className="project-metro-date">2018</div>
                    <div className="project-metro-detail">
                      <h2 className="project-metro-title font-abril">Brole Movies App</h2>
                      <div className="project-metro-category">Mobile App, animation</div>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>

            <div className="more more-lg more-total-lg text-center"><a href="#" className="underline">More project</a></div>
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

        <div className="home-flash-dark pt-0 pb-0"><div className="container"><hr className="mt-0 mb-0"/></div></div>

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


  </div>

</>

    )
}