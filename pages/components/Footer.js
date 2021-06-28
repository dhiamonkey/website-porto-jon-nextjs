import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Footer() {
    return ( <div className="footer">
        <div className="footer-flash-about home-flash-dark">
          <div className="container">
          Thank you for visiting my humble digital abode. If you'd like to know more about me, please do drop me an e-mail at:
            <div className="mt-4"><a href="mailto:dhiamuhammad@gmail.com" className="underline"><strong>dhiamuhammad@gmail.com</strong></a></div>
          </div>
        </div>

        <div className="home-flash-dark pt-0 pb-0">
        

        <div className="footer-flash home-flash-dark">
          <div className="container">
            <div className="footer-content-flash">
              <div className="row">
                <div className="col-md-3 col-6 mb-5">
                  <h5>My Resume</h5>
                  <button className="btn btn-primary btn-sm wow fadeInUp" data-wow-delay=".4s">Download my CV </button>
                </div>

                <div className="col-md-4 col-6 mb-5">
                  <h5>Address</h5>
                  <ul className="footer-nav">
                    <li>Rawa Buntu, BSD City,</li>
                    <li>South Tangerang, Banten, Indonesia.</li>
                    <li>(but willing to relocate anywhere)</li>
                  </ul>
                </div>

                <div className="col-md-2 col-6 mb-5">
                  <h5>quick links</h5>
                  <ul className="footer-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/aspiring-content">Aspiring Contents</a></li>
                    <li><a href="/selling-content">Selling Content</a></li>
                    <li><a href="/other-works">Other Works</a></li>
                    <li><a href="/about-me">About Me</a></li>
                  </ul>
                </div>

                <div className="col-md-3 col-6 mb-5">
                  <ul className="social social-rounded">
                  <li><a href="https://www.linkedin.com/in/dhia-rizqullah/" target="blank"><i className="socicon-linkedin"></i></a></li>
                  <li><a href="https://github.com/dhiamonkey" target="blank"><i className="socicon-github"></i></a></li>
                  <li><a href="https://www.behance.net/dhiamuhammad" target="blank"><i className="socicon-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="site-info">
              <div className="row">
                <div className="col-4">
                  <div className="copyright text-left">&copy; 2021 <strong>Dhia Muhammad</strong>. All Rights Reserved.</div>
                </div>
                <div className="col-8   ">
                  <div className="text-right">HTML template from <strong>Logan Cee</strong>, Migrated &amp; Developed in NextJS &amp; ReactJS by <strong>Dhia Muhammad</strong> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    )
}