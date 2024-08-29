import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import '../../public/assets/vendor/swiper/swiper-bundle.min.css';
// import '/assets/vendor/swiper/swiper-bundle.min.css';
import { Pagination, Autoplay } from 'swiper/modules';

// import client1 from '../../public/assets/img/clients/client-1.png';
// import client2 from '../../public/assets/img/clients/client-2.png';
// import client3 from '../../public/assets/img/clients/client-3.png';
// import client4 from '../../public/assets/img/clients/client-4.png';
// import client5 from '../../public/assets/img/clients/client-5.png';
// import client6 from '../../public/assets/img/clients/client-6.png';
// import client7 from '../../public/assets/img/clients/client-7.png';
// import client8 from '../../public/assets/img/clients/client-8.png';
import client1 from '/assets/img/clients/ASA_Blanco.png';
import client2 from '/assets/img/clients/Detroit_Blanco.png';
import client3 from '/assets/img/clients/Great_Sound_Blanco.png';
import client4 from '/assets/img/clients/MFB clothes_ Blanco (1).png';
import client5 from '/assets/img/clients/ASA_Blanco.png';
import client6 from '/assets/img/clients/Detroit_Blanco.png';
import client7 from '/assets/img/clients/Great_Sound_Blanco.png';
import client8 from '/assets/img/clients/MFB clothes_ Blanco (1).png';

const ClientsSection = () => {
    const swiperConfig = {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 2000,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 120,
            },
        },
        modules: [Pagination, Autoplay], // Módulos se configuran aquí
    };

    return (
        <section id="clients" className="clients section light-background">
            <div className="container">
                <Swiper {...swiperConfig}>
                    <SwiperSlide>
                        <img src={client1} className="img-fluid" alt="Client 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={client2} className="img-fluid" alt="Client 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={client3} className="img-fluid" alt="Client 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={client4} className="img-fluid" alt="Client 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={client5} className="img-fluid" alt="Client 5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={client6} className="img-fluid" alt="Client 6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={client7} className="img-fluid" alt="Client 7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={client8} className="img-fluid" alt="Client 8" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default ClientsSection;
