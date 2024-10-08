import React from 'react'
import team1 from '/assets/img/team/NICOVITTO_12.jpg'
// import team1 from '/assets/img/team/NICOVITTO_12.jpg'
import team2 from '/assets/img/team/Mati Careri.jpg'
import team3 from '/assets/img/team/team-3.jpg'
// import team1 from '../../public/assets/img/team/image.png'
// import team2 from '../../public/assets/img/team/team-2.jpg'
// import team3 from '../../public/assets/img/team/team-3.jpg'

const TeamSection = () => {
  return (
    <section id="team" className="team section dark-background">
      {/* Section Title */}
      <div className="container section-title" /* data-aos="fade-up" */>
        <span>Team</span>
        <h2>Team</h2>
        {/* <p>
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
      consectetur velit
    </p> */}
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex"
            /* data-aos="fade-up" */
            /* data-aos-delay={100} */
          >
            <div className="member">
              <img src={team1} className="img-fluid" alt="" />
              <div className="member-content">
                <h4>Nico Vitto</h4>
                <span> Founder </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, excepturi magni. Dolore reprehenderit debitis cum
                  voluptatum asperiores aliquid dolorem nemo, unde recusandae doloremque, rerum iure placeat.
                  Quis, nesciunt dicta! Adipisci.
                </p>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div
            className="col-lg-4 col-md-6 d-flex"
            /* data-aos="fade-up" */
            /* data-aos-delay={200} */
          >
            <div className="member">
              <img src={team2} className="img-fluid" alt="" />
              <div className="member-content">
                <h4>Matias Careri</h4>
                <span> CEO - ASA Producciones </span>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, excepturi magni. Dolore reprehenderit debitis cum
                  voluptatum asperiores aliquid dolorem nemo, unde recusandae doloremque, rerum iure placeat.
                  Quis, nesciunt dicta! Adipisci.
                </p>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div
            className="col-lg-4 col-md-6 d-flex"
            /* data-aos="fade-up" */
            /* data-aos-delay={300} */
          >
            <div className="member">
              <img src={team3} className="img-fluid" alt="" />
              <div className="member-content">
                <h4>Joaquin Mattiauda</h4>
                <span>Founder Great Sound</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                  qui porro et laborum toro des clara
                </p>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
        </div>
      </div>
    </section>

  )
}

export default TeamSection