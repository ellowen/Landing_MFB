import React from 'react'

// import MFB1 from '/assets/img/MAIN/portadamfb_limpia.jpg'
import MFB1 from '/assets/img/MAIN/11294533_210.jpg'

const MainSection = () => {
    return (

        <section id="hero" className="hero section dark-background">
            <img src={MFB1} alt="" data-aos="fade-in" />
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row justify-content-start">
                    <div className="col-lg-8">
                        <h3>MUSIC FOR BALANCE</h3>
                        {/*  ORIGINAL  */}
                        {/* <p> <strong style={{ color: '#D2122E' }} >Episodio #1</strong> | 2 de Octubre | <strong style={{ color: '#D2122E' }}>20:00hs ARG</strong></p> 
                         <h2>NICOVITTO</h2> */}
                        {/*  ORIGINAL  */}
                        {/*  COMING SOON  */}
                        <p> <strong style={{ color: '#D2122E' }} >COMING SOON</strong> | EPISODIO #1 </p>
                        {/*  COMING SOON  */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MainSection