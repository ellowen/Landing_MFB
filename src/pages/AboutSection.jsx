import React from 'react'
import aboutImg from '/assets/img/image.png'
const AboutSection = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span>
          About MFB
          <br />
        </span>
        <h2>
          About MFB
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
            {/* <h1>MUSIC FOR BALANCE</h1> */}
            {/* <p className="fst-italic">
              Music for Balance es un movimiento artístico dedicado a compartir música exquisita y sutil a través de DJ Sets, principalmente bajo el género Organic House.
              Busca enfatizar los sonidos orgánicos y grooveros que nos llevan a conectarnos con nuestras raíces y al mismo tiempo crean conexiones espirituales de conciencia.
              MFB Clothes nace como una expansión del movimiento, fusionado con la moda y la creación genuina.
              La asociación con la música Organic House y la sostenibilidad, refleja la imagen de la marca como consciente y en sintonía con las tendencias artisticas.
              Pasión por la autenticidad artística - Diseños únicos para Artistas - Diseños exclusivos para Festivales.
            </p> */}
            <p className="fst-italic">
              <strong>Movimiento artístico</strong> dedicado a compartir música de calidad a través de <strong>DJ Sets</strong>,
              bajo el género <strong>Organic House</strong>. Busca <strong>contagiar con sonidos orgánicos y grooveros </strong>
              que nos llevan a conectarnos con nuestras raíces y al mismo tiempo crean <strong>conexiones espirituales de conciencia.</strong>
            </p>

            <p className="fst-italic">
              Liderado por su fundador, <strong>NICOVITTO</strong>, quien fusiona su pasión
              por la <strong>producción audiovisual y la música</strong>,
              consolida estos <strong>episodios streaming</strong>.
            </p>

            {/* <p className="fst-italic">
              Cada sesión contará con un <strong>DJ GUEST</strong>, quien nos compartirá
              su catálogo de
              <strong><br></br> Organic House</strong>, lo cual será una experiencia
              sensorial memorable.
              Los artistas no solo serán invitados por su talento,
              sino también por sus <strong>valores sobre la autenticidad</strong>.
            </p>

            <p className="fst-italic">
              El booking está a cargo de la <strong>Agencia Great Sound</strong>,
              quién entiende y comparte los valores en la <strong>curaduría musical </strong>
              que el ciclo requiere, elevando y dando prestigio
              a este movimiento artístico y en constante <strong> colaboración con la escena musical</strong>.
            </p> */}
            <br />
            <ul>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                  Cada sesión contará con un <strong>DJ GUEST</strong>, quien nos compartirá
                  su catálogo de
                  <strong> Organic House</strong>, lo cual será una experiencia
                  sensorial memorable.
                  Los artistas no solo serán invitados por su talento,
                  sino también por sus <strong>valores sobre la autenticidad</strong>.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                  El booking está a cargo de la <strong>Agencia Great Sound</strong>,
                  quién entiende y comparte los valores en la <strong>curaduría musical </strong>
                  que el ciclo requiere, elevando y dando prestigio
                  a este movimiento artístico y en constante <strong> colaboración con la escena musical</strong>.
                </span>
              </li>
              {/* <li>
            <i className="bi bi-check-circle" />{" "}
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </span>
          </li> */}
            </ul>
            {/* <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right" />
            </a> */}
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutSection