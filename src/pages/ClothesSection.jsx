import React from 'react';

import clothes1 from '/assets/img/clothes/clothes1.jpg';
import clothes2 from '/assets/img/clothes/clothes2.jpg';
import clothes3 from '/assets/img/clothes/clothes3.jpg';

const clothesItems = [
    {
        id: 1,
        title: "REMERA OVERSIZE HATTA",
        description: "",
        imageUrl: clothes1,
        detailLink: "https://mfbclothes.com.ar/productos/remera-hatta/",
    },
    {
        id: 2,
        title: "CAMISA MUSIC FOR BALANCE - Negro",
        description: "",
        imageUrl: clothes2,
        detailLink: "https://mfbclothes.com.ar/productos/camisa-music-for-balance-negro/",
    },
    {
        id: 3,
        title: "REMERA OVERSIZE ORGANIC",
        description: "",
        imageUrl: clothes3,
        detailLink: "https://mfbclothes.com.ar/productos/remera-organic/",
    },
];

const ClothesSection = () => {
    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title" data-aos="fade-up">
                <span>MFB Clothes</span>
                <h2>MFB Clothes</h2>
                <p style={{ color: '#e6e6e6' }}>
                    Fashion & Style Brand for Musical Events & Artists
                </p>
            </div>

            <div className="container">
                <div
                    className="isotope-layout"
                    data-default-filter="*"
                    data-layout="masonry"
                    data-sort="original-order"
                >
                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
                        {clothesItems.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6 portfolio-item isotope-item">
                                <img src={item.imageUrl} className="img-fluid" alt={item.title} />
                                <div className="portfolio-info">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <a
                                        href={item.imageUrl}
                                        title={item.title}
                                        data-gallery={`portfolio-gallery-${item.title.toLowerCase()}`}
                                        className="glightbox preview-link"
                                    />
                                    <a
                                        href={item.detailLink}
                                        title="More Details"
                                        className="details-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-link-45deg" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClothesSection;
