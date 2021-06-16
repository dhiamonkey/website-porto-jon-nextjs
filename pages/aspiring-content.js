import Head from 'next/head';
import React from 'react'
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import Footer from "./components/Footer";

Modal.setAppElement("body");

const portoModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(0,0,0,0.5)",
    zIndex: 1000,
  },
  content : {
    position: "absolute",
    top: "8vw",
    left: "15vw",
    right: "15vw",
    bottom: "8vw",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  }
};

const portoData = [{
  title: 'Video Ali',
  category: 'Instagram short video',
  size: {width: '20vw', height: '520px'},
},
{
  title: 'Video Ali',
  category: 'Instagram short video',
  size: {width: '40vw', height: '520px'},
},
{
  title: 'Video Ali',
  category: 'Instagram short video',
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

    <title>Dhia's Portfolio - Aspiring Contents</title>

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
      <div className="wrapper paralax-start">


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

      
      <Footer />

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