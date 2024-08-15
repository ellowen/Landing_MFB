import React from 'react'

const ContactSection = () => {
    return (
        <section id="contacto" className="contact section dark-background">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <span>Contacto</span>
                <h2>Contacto</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                </p>
            </div>
            {/* End Section Title */}

            <div className="container " data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">

                    <div className="col-lg-6 col-md-6 ">
                        <div
                            className="info-item d-flex flex-column justify-content-center align-items-center"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <i className="bi bi-telephone" />
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-lg-6 col-md-6 mb-1">
                        <div
                            className="info-item d-flex flex-column justify-content-center align-items-center"
                            data-aos="fade-up"
                            data-aos-delay={400}
                        >
                            <i className="bi bi-envelope" />
                            <h3>Email Us</h3>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    {/* End Info Item */}
                </div>
                <div className="row gy-4">
                    <div className="col-lg-12 mb-1">
                        <div
                            className="info-item d-flex flex-column justify-content-center align-items-center"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <i className="bi bi-geo-alt" />
                            <h3>Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    {/* End Info Item */}
                </div>
            </div>
        </section>

    )
}

export default ContactSection