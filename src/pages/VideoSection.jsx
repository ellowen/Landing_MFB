import React, { useState, useRef, useEffect } from 'react';

const VideoSection = () => {
  const [loadVideos, setLoadVideos] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setLoadVideos(true);
      return; // No uses el observer en móviles
    }

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
        threshold: 0.4, // 10% del componente debe ser visible para activar la carga
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       if (entry.isIntersecting) {
  //         setLoadVideos(true);
  //         observer.disconnect(); // Detener la observación después de que se carguen los videos
  //       }
  //     },
  //     {
  //       root: null, // viewport
  //       rootMargin: '0px',
  //       threshold: 0.1, // 10% del componente debe ser visible para activar la carga
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (observer && sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  const renderYouTubeIframe = (videoId) => (
    <iframe
      width="100%"
      height="auto"
      style={{ aspectRatio: '16/9' }} // Mantén la relación de aspecto 16:9
      src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );

  // const renderYouTubeIframe = (videoId) => (
  //   <iframe
  //     width="100%"
  //     height="250"
  //     src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
  //     title="YouTube video player"
  //     frameBorder="0"
  //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //     allowFullScreen
  //   ></iframe>
  // );

  return (
    <section id="videos" className="services section dark-background" ref={sectionRef}>
      <div className="container section-title" data-aos="fade-up">
        <span>Episodios</span>
        <h2>Episodios</h2>
        <p>
          Disfrutá de la <strong>Temporada #4 PURE ORGANIC HOUSE</strong>
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="service-item position-relative">
              {/* {loadVideos && renderYouTubeIframe("I6ApqvOQEDQ")} */}
              {/* {loadVideos && renderYouTubeIframe("TkPhhENZcIQ")} */}
              {loadVideos && renderYouTubeIframe("d_ZyTLIvpOw")}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-item position-relative">
              {loadVideos && renderYouTubeIframe("TkPhhENZcIQ")}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-item position-relative">
              {loadVideos && renderYouTubeIframe("MHthWaK9MEo")}
              {/* {loadVideos && renderYouTubeIframe("afAtu9hugNg")} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
