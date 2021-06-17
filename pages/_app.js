
import React from 'react'
import Head from 'next/head'
import Footer from "./components/Footer";
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'



function MyApp({ Component, pageProps, router}) {

  return (
    <>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0" />
    <meta name="description" content="Lewis - Creative Portfolio HTML Template"/>
    <meta name="author" content="Paul, Logan Cee" />

    
    </Head>
    
    <div className="theme-orange">
    <div className="animsition">
    <div className="wrapper">
    <header id="header" className="header header-fixed">
          {/* heading */}
          <div className="container-fluid clearfix">
            <div className="brand">
              <a href="/">
                <div className="brand-name text-texture">DM</div>
                <div className="brand-text">DhiaMuhammad-netlify.app</div>
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
                <div className="header-contact-item"><a href="https://api.whatsapp.com/send/?phone=6281513933509&text&app_absent=0" target="_blank" className="phone-link">+628 151 3933 509</a></div>
                <div className="header-contact-divider">/</div>
                <div className="header-contact-item"><a href="mailto:dhiamuhammad@gmail.com" className="mail-link">dhiamuhammad@gmail.com</a></div>
              </div>
            </div>
          </div>
          {/* heading */}
          {/* menu nav starts */}
          <div className="hide-menu a-nav-toggle"></div>
          <div className="menu">
            <div className="menu-lang">
              <a href="#" className="menu-lang-item active">English</a>
              <a href="#" className="menu-lang-item" onclick="alert('Hello, this language mode is still on-progress')">Indonesian</a>
              <a href="#" className="menu-lang-item" onclick="alert('Hello, this language mode is still on-progress')">Sundanese</a>
              <a href="#" className="menu-lang-item" onclick="alert('Hello, this language mode is still on-progress')">Dutch</a>
            </div>

            <div className="menu-main" id="accordion">
              <ul>
                <li className={router.pathname === '/' ? "active" : ""}>
                  <a data-text="Home"  href="/" role="button" aria-expanded="false" aria-controls="menuHome">Home</a>
                </li>
                <li className={router.pathname === '/aspiring-content' && '/selling-content' && '/other-works' ? "active" : ""}>
                  <a data-text="Works" data-toggle="collapse" href="#menuWorks" role="button" aria-expanded="false" aria-controls="menuWorks">Works</a>
                  <div className="collapse" id="menuWorks" data-parent="#accordion">
                    <ul>
                      <li className={router.pathname === '/aspiring-content' ? "active" : ""}>
                        <a href="/aspiring-content" className="animsition-link" data-animsition-out-class="fade-out" data-text="Aspiring Contents">Aspiring Contents</a></li>
                      <li>
                        <a href="/selling-content" className="animsition-link" data-animsition-out-class="fade-out" data-text="Selling Contents">Selling Contents</a></li>
                      <li>
                        <a href="/other-works" className="animsition-link" data-animsition-out-class="fade-out" data-text="Other Works">Other Works</a></li>
                    </ul>
                  </div>
                </li>
                <li className={router.pathname === '/about-me' ? "active" : ""}>
                  <a data-text="About Me &amp; CV" href="about-me" role="button" aria-expanded="false" aria-controls="About Me">About Me</a></li>
                </ul>
            </div>

            <div className="menu-footer">
                <ul className="social social-rounded">
                  <li><a href="https://www.linkedin.com/in/dhia-rizqullah/" target="blank"><i className="socicon-linkedin"></i></a></li>
                  <li><a href="https://github.com/dhiamonkey" target="blank"><i className="socicon-github"></i></a></li>
                  <li><a href="https://www.behance.net/dhiamuhammad" target="blank"><i className="socicon-behance"></i></a></li>
                </ul>
            </div>
          </div>
          {/* menu nav ends */}
        </header>

        <Component {...pageProps} />
        </div>
        </div>
        </div>
  </>
  )
}

export default MyApp
