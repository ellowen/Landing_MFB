import React, { useEffect } from 'react';
import logo from '../assets/img/MFB1.jpg';

const Header = () => {

  // const handleClick = (e, id) => {
  //   e.preventDefault();
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
      {/* Hello world */}
      <header id="header" className="header fixed-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">contact@example.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+1 5589 55488 55</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        {/* End Top Bar */}
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="#hero" className=" d-flex align-items-center"/*  onClick={(e) => handleClick(e, 'hero')} */>
              {/* Uncomment the line below if you also wish to use an image logo */}
              <img src={logo} width={70} height={65} alt="" />
              {/* <h1 className="sitename">Day</h1> */}
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <a href="#hero" className="active"/*  onClick={(e) => handleClick(e, 'hero')} */>Home</a>
                </li>
                <li>
                  <a href="#about"/*  onClick={(e) => handleClick(e, 'about')} */>About</a>
                </li>
                <li>
                  <a href="#services"/*  onClick={(e) => handleClick(e, 'services')} */>Videos</a>
                </li>
                <li>
                  <a href="#portfolio"/*  onClick={(e) => handleClick(e, 'portfolio')} */>Tienda</a>
                </li>
                <li>
                  <a href="#team"/*  onClick={(e) => handleClick(e, 'team')} */>Team</a>
                </li>
                <li>
                  <a href="#contacto"/*  onClick={(e) => handleClick(e, 'contacto')} */>Contacto</a>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header