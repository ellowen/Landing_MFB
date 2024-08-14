import React from 'react'
import aboutImg from '../assets/img/image.png'
const AboutSection = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span>
          About Us
          <br />
        </span>
        <h2>
          About Us
          <br />
        </h2>
        {/* <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p> */}
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 order-2 order-lg-1 content"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h1>MUSIC FOR BALANCE</h1>
            <p className="fst-italic">
              Music for Balance es un movimiento artístico dedicado a compartir música exquisita y sutil a través de DJ Sets, principalmente bajo el género Organic House.
              Busca enfatizar los sonidos orgánicos y grooveros que nos llevan a conectarnos con nuestras raíces y al mismo tiempo crean conexiones espirituales de conciencia.
              MFB Clothes nace como una expansión del movimiento, fusionado con la moda y la creación genuina.
              La asociación con la música Organic House y la sostenibilidad, refleja la imagen de la marca como consciente y en sintonía con las tendencias artisticas.
              Pasión por la autenticidad artística - Diseños únicos para Artistas - Diseños exclusivos para Festivales.
            </p>
            <br/>
            {/* <ul>
          <li>
            <i className="bi bi-check-circle" />{" "}
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </li>
          <li>
            <i className="bi bi-check-circle" />{" "}
            <span>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </span>
          </li>
          <li>
            <i className="bi bi-check-circle" />{" "}
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </span>
          </li>
        </ul> */}
            <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutSection