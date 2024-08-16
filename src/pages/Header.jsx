import React, { useEffect } from 'react';
// import logo from '../../public/assets/img/MFB1.jpg';
import logo from '/assets/img/MFB1.jpg';

const Header = () => {
  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    
    if (mobileNavToggleBtn) {
      const mobileNavToggle = () => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
      };

      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });

      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });

      return () => {
        // Cleanup: remove event listeners
        mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
        document.querySelectorAll('#navmenu a').forEach(navmenu => {
          navmenu.removeEventListener('click', mobileNavToggle);
        });
        document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
          navmenu.removeEventListener('click', () => {});
        });
      };
    }
  }, []);

  return (
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

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="#hero" className="d-flex align-items-center">
            <img src={logo} width={70} height={65} alt="" />
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Videos</a></li>
              <li><a href="#portfolio">Tienda</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
