import Head from 'next/head'
import Image from 'next/image'
import Footer from "./components/Footer";
import axios from 'axios';
import React, { useState, useEffect } from 'react'




export default function ApiLab() {
    //determining a default empty state, state will be changed when async function finished fetching data

    const [weatherdata, setWeatherdata] = useState({});
    const [weatherdataJkt, setWeatherdataJkt] = useState({});
    
    // Similar to componentDidMount and componentDidUpdate:
    
    useEffect(() => {
    
    // Update the document title using the browser API
            // Make a request for a user with a given ID
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=Ciwidey&appid=f49e54741d468370ba3543395d1a5b68&units=metric')
            .then(function (response) {
            // handle success
            console.log(response.data)
            setWeatherdata(response.data);
            });
        }, []);
    
        // Similar to componentDidMount and componentDidUpdate:
        
        useEffect(() => {
        
        // Update the document title using the browser API
                // Make a request for a user with a given ID
                axios.get('https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=f49e54741d468370ba3543395d1a5b68&units=metric')
                .then(function (response) {
                // handle success
                console.log(response.data)
                setWeatherdataJkt(response.data);
                });
            }, []);

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
  <div className="theme-orange fixed-footer fixed-footer-lg">
    <div className="animsition">
      <div className="wrapper parallax-start">
        <div id="playground-area">
         <div className="section section-content section-centered full-height full-image-dark text-white" style={{backgroundImage: ''}}>
            <div className="section-item">
                <div className="container">
                <h3>
                    Living in  <span style={{color: '#ffc700'}}> {(weatherdataJkt.name ? weatherdataJkt.name : 'no data')} </span>is kinda doghsit. <br /> <br /> I mean... Look at its weather compared to a godlike town like <span style={{color: '#ffc700'}}> {(weatherdata.name ? weatherdata.name : 'no data')} </span>. <br /> <br /> Right now, it's <span style={{color: '#ffc700'}}> {(weatherdataJkt.weather ? weatherdataJkt.weather[0].description : 'no data')} </span> in Jakarta with an average temperature of <span style={{color: '#ffc700'}}> {(weatherdataJkt.main ? weatherdataJkt.main.temp : 'no data')}° Celcius </span>. <br /> <br /> Meanwhile it's <span style={{color: '#ffc700'}}> {(weatherdata.weather ? weatherdata.weather[0].description : 'no data')} </span>in Ciwidey with an avg temp of <span style={{color: '#ffc700'}}> {(weatherdata.main ? weatherdata.main.temp : 'no data')}° Celcius. </span><br /> <br />
                    I wish I can live in Ciwidey someday.
                     
                </h3>
                <p>
                </p>
                </div>
            </div>
          </div>   
        </div>
      </div>
     <Footer />

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

    </>
    )
} 

