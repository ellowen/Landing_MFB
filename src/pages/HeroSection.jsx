import React from 'react'
import MFB1 from '../assets/img/MFB2.jpg'

const HeroSection = () => {
    return (

        <section id="hero" className="hero section dark-background">
            <img src={MFB1} alt="" data-aos="fade-in" />
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                {/* <div className="row justify-content-start">
                    <div className="col-lg-8">
                        <h2>Welcome to Day</h2>
                        <p>We are team of talented designers making websites with Bootstrap</p>
                        <a href="#about" className="btn-get-started">
                            Get Started
                        </a>
                    </div>
                </div> */}
            </div>
        </section>

    )
}

export default HeroSection