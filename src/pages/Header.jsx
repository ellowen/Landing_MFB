import React from 'react';
import logo from '../assets/img/MFB1.jpg';

const Header = () => {
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
        <a href="index.html" className=" d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          <img src={logo} width={70} height={65} alt=""/>
          {/* <h1 className="sitename">Day</h1> */}
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Videos</a>
            </li>
            <li>
              <a href="#portfolio">Tienda</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            {/* <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="#contact">Contacto</a>
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