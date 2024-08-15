import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const ServiceSection = () => {
  const [loadVideos, setLoadVideos] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setLoadVideos(true);
          observer.disconnect(); // Detener la observación después de que se carguen los videos
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% del componente debe ser visible para activar la carga
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);a
      }
    };
  }, []);

  const videoOptions = {
    height: 250,
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section id="services" className="services section dark-background" ref={sectionRef}>
      <div className="container section-title" data-aos="fade-up">
        <span>Videos</span>
        <h2>Videos</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="service-item position-relative">
              {loadVideos && <YouTube videoId="I6ApqvOQEDQ" opts={videoOptions} />}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-item position-relative">
              {loadVideos && <YouTube videoId="5nRZ7wquWgs" opts={videoOptions} />}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-item position-relative">
              {loadVideos && <YouTube videoId="BARPOnAHQYg" opts={videoOptions} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
