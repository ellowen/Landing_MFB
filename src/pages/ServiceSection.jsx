import React from 'react';
import YouTube from 'react-youtube';

const ServiceSection = () => {
  const videoOptions = {
    height: '250',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section id="services" className="services section dark-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span>Videos</span>
        <h2>Videos</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="service-item position-relative">
              <YouTube videoId="I6ApqvOQEDQ" opts={videoOptions} />
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="service-item position-relative">
              <YouTube videoId="5nRZ7wquWgs" opts={videoOptions} />
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="service-item position-relative">
              <YouTube videoId="BARPOnAHQYg" opts={videoOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;













// import React from 'react'

// const ServiceSection = () => {
//   return (
//     <section id="services" className="services section dark-background">
//   {/* Section Title */}
//   <div className="container section-title" data-aos="fade-up">
//     <span>Services</span>
//     <h2>Services</h2>
//     <p>
//       Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
//       consectetur velit
//     </p>
//   </div>
//   {/* End Section Title */}
//   <div className="container">
//     <div className="row gy-4">
//       <div
//         className="col-lg-4 col-md-6"
//         data-aos="fade-up"
//         data-aos-delay={100}
//       >
//         <div className="service-item  position-relative">
//           <div className="icon">
//             <i className="bi bi-activity" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>Nesciunt Mete</h3>
//           </a>
//           <p>
//             Provident nihil minus qui consequatur non omnis maiores. Eos
//             accusantium minus dolores iure perferendis tempore et consequatur.
//           </p>
//         </div>
//       </div>
//       {/* End Service Item */}
//       <div
//         className="col-lg-4 col-md-6"
//         data-aos="fade-up"
//         data-aos-delay={200}
//       >
//         <div className="service-item position-relative">
//           <div className="icon">
//             <i className="bi bi-broadcast" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>Eosle Commodi</h3>
//           </a>
//           <p>
//             Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
//             Libero corrupti neque eum hic non ut nesciunt dolorem.
//           </p>
//         </div>
//       </div>
//       {/* End Service Item */}
//       <div
//         className="col-lg-4 col-md-6"
//         data-aos="fade-up"
//         data-aos-delay={300}
//       >
//         <div className="service-item position-relative">
//           <div className="icon">
//             <i className="bi bi-easel" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>Ledo Markt</h3>
//           </a>
//           <p>
//             Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea
//             aut. Vel qui id voluptas adipisci eos earum corrupti.
//           </p>
//         </div>
//       </div>
     
//     </div>
//   </div>
// </section>

//   )
// }

// export default ServiceSection




















 {/* End Service Item */}
      {/* <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-bounding-box-circles" />
          </div>
          <a href="#" className="stretched-link">
            <h3>Asperiores Commodit</h3>
          </a>
          <p>
            Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate
            sed error ea fuga sit provident adipisci neque.
          </p>
          <a href="#" className="stretched-link" />
        </div>
      </div> */}
      {/* End Service Item */}
      {/* <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay={500}
      >
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-calendar4-week" />
          </div>
          <a href="#" className="stretched-link">
            <h3>Velit Doloremque</h3>
          </a>
          <p>
            Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
            ipsam corporis aut. Sed animi at autem alias eius labore.
          </p>
          <a href="#" className="stretched-link" />
        </div>
      </div> */}
      {/* End Service Item */}
      {/* <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay={600}
      >
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-chat-square-text" />
          </div>
          <a href="#" className="stretched-link">
            <h3>Dolori Architecto</h3>
          </a>
          <p>
            Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non
            et debitis iure. Corrupti recusandae ducimus enim.
          </p>
          <a href="#" className="stretched-link" />
        </div>
      </div> */}
      {/* End Service Item */}