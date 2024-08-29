import React from 'react'
// import MFB1 from '../../public/assets/img/istockphoto.jpg'
// import MFB1 from '/assets/img/istockphoto.jpg'
// import MFB1 from '/assets/img/MAIN/portada_micovitto_mfb (1).jpg'
import MFB1 from '/assets/img/MAIN/portadamfb_limpia.jpg'

const MainSection = () => {
    return (

        <section id="hero" className="hero section dark-background">
            <img src={MFB1} alt="" /* data-aos="fade-in" */ />
            <div className="container" /* data-aos="fade-up" data-aos-delay={100} */>
                <div className="row justify-content-start">
                    <div className="col-lg-8">
                        <h3>MUSIC FOR BALANCE</h3>
                        <p> <strong style={{ color: '#D2122E' }} >Episodio #1</strong> | 2 de Octubre | <strong style={{ color: '#D2122E' }}>20:00hs ARG</strong></p>
                        <h2>NICOVITTO</h2>
                        {/* <a href="#about" className="btn-get-started">
                            Get Started
                        </a> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MainSection