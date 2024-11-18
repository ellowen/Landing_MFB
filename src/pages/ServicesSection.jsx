import React from 'react';

const services = [
    {
        id: 1,
        icon: 'bi bi-activity',
        title: 'Producción Integral de Eventos',
        description:
            'Organizamos y gestionamos eventos de principio a fin, ofreciendo soluciones creativas, logísticas y técnicas que garantizan una experiencia inolvidable. Desde la planificación hasta la ejecución, nos aseguramos de que cada detalle esté perfectamente coordinado.',
        delay: 100,
    },
    {
        id: 2,
        icon: 'bi bi-broadcast',
        title: 'Diseños de Escenarios',
        description:
            'Creamos escenarios impactantes que combinan funcionalidad y estética. Nos enfocamos en diseños personalizados que se adaptan a la temática del evento, utilizando tecnología de vanguardia para ofrecer un ambiente único e inmersivo.',
        delay: 200,
    },
    {
        id: 3,
        icon: 'bi bi-easel',
        title: 'Producción de Contenido Audiovisual',
        description:
            'Producimos contenido audiovisual de alta calidad, desde videos promocionales hasta transmisiones en vivo. Nuestro equipo creativo trabaja contigo para contar historias visuales que conecten con tu audiencia y refuercen tu mensaje.',
        delay: 300,
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="services section dark-background">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <span>Servicios</span>
                <h2>Servicios</h2>
                <p>
                    Ofrecemos soluciones creativas y profesionales para tus eventos y proyectos,
                    adaptándonos a tus necesidades y superando tus expectativas.
                </p>
            </div>
            {/* End Section Title */}
            <div className="container">
                <div className="row gy-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={service.delay}
                        >
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className={service.icon} />
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>{service.title}</h3>
                                </a>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
