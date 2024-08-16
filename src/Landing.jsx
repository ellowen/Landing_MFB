import React, { useEffect, useRef, useState } from 'react';
//import AOS from 'aos';
//import AOS from './assets/vendor/aos';
import '../public/assets/vendor/aos/aos.css';
//import Swiper from './assets/vendor/swiper'; // Asegúrate de que Swiper esté instalado
import '../public/assets/vendor/swiper/swiper-bundle.min.css';
//import GLightbox from './assets/vendor/glightbox'; // Asegúrate de que GLightbox esté instalado
import '../public/assets/vendor/glightbox/css/glightbox.css';
//import Isotope from './assets/vendor/isotope-layout'; // Asegúrate de que Isotope esté instalado
//import imagesLoaded from './assets/vendor/imagesloaded'; // Asegúrate de que imagesLoaded esté instalado

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollTopRef = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    const mobileNavToggle = () => {
      document.body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    };

    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

    return () => {
      mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          document.body.classList.toggle('mobile-nav-active');
        }
      });
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      });
    });
  }, []);

  useEffect(() => {
    if (preloaderRef.current) {
      const handleLoad = () => {
        preloaderRef.current.remove();
      };
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  useEffect(() => {
    const handleScrollTop = () => {
      if (scrollTopRef.current) {
        window.scrollY > 100 ? scrollTopRef.current.classList.add('active') : scrollTopRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScrollTop);
    window.addEventListener('load', handleScrollTop);

    return () => {
      window.removeEventListener('scroll', handleScrollTop);
      window.removeEventListener('load', handleScrollTop);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const initSwiper = () => {
      document.querySelectorAll(".init-swiper").forEach(swiperElement => {
        let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());

        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    };

    window.addEventListener("load", initSwiper);

    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
        const initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(filters => {
          filters.addEventListener('click', function() {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof AOS.init === 'function') {
              AOS.init();
            }
          });
        });
      });
    });

    window.addEventListener('load', function() {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });

    const navmenulinks = document.querySelectorAll('.navmenu a');

    const navmenuScrollspy = () => {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  }, []);

  return (
    <>
      <div id="preloader" ref={preloaderRef}></div>
      <a href="#top" className="scroll-top" ref={scrollTopRef}>
      </a>
      {/* Resto del contenido de tu componente */}
    </>
  );
};

export default LandingPage;