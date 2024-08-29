import React from 'react'

// import clothes1 from '../../public/assets/img/clothes/clothes1.jpg';
// import clothes2 from '../../public/assets/img/clothes/clothes2.jpg';
// import clothes3 from '../../public/assets/img/clothes/clothes3.jpg';
// import clothes4 from '../../public/assets/img/clothes/clothes4.jpg';
// import clothes5 from '../../public/assets/img/clothes/clothes5.jpg';
import clothes1 from '/assets/img/clothes/clothes1.jpg';
import clothes2 from '/assets/img/clothes/clothes2.jpg';
import clothes3 from '/assets/img/clothes/clothes3.jpg';
import clothes4 from '/assets/img/clothes/clothes4.jpg';
import clothes5 from '/assets/img/clothes/clothes5.jpg';

const ClothesSection = () => {
    return (
        <section id="portfolio" className="portfolio section">
            {/* Section Title */}
            <div className="container section-title" /* data-aos="fade-up" */>
                <span>MFB Clothes</span>
                <h2>MFB Clothes</h2>
                <p style={{ color: '#e6e6e6' }}>
                    Fashion & Style Brand for Musical Events & Artists
                </p>
            </div>
            {/* End Section Title */}
            <div className="container">
                <div
                    className="isotope-layout"
                    data-default-filter="*"
                    data-layout="masonry"
                    data-sort="original-order"
                >
                    {/* <ul
                        className="portfolio-filters isotope-filters"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <li data-filter="*" className="filter-active">
                            All
                        </li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-product">Card</li>
                        <li data-filter=".filter-branding">Web</li>
                    </ul> */}
                    {/* End Portfolio Filters */}
                    <div
                        className="row gy-4 isotope-container"
                       /*  data-aos="fade-up" */
                       /*  data-aos-delay={200} */
                    >
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img
                                src={clothes1}
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>App 1</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href={clothes1}
                                    title="App 1"
                                    data-gallery="portfolio-gallery-app"
                                    className="glightbox preview-link"
                                >
                                    {/* <i className="bi bi-zoom-in" /> */}
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div>
                        {/* End Portfolio Item */}
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img
                                src={clothes2}
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>Product 1</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href={clothes2}
                                    title="Product 1"
                                    data-gallery="portfolio-gallery-product"
                                    className="glightbox preview-link"
                                >
                                    {/* <i className="bi bi-zoom-in" /> */}
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div>
                        {/* End Portfolio Item */}
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img
                                src={clothes3}
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>Branding 1</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href={clothes3}
                                    title="Branding 1"
                                    data-gallery="portfolio-gallery-branding"
                                    className="glightbox preview-link"
                                >
                                    {/* <i className="bi bi-zoom-in" /> */}
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div>
                        {/* End Portfolio Item */}
                        {/* <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img
                                src={clothes4}
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>App 2</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href={clothes4}
                                    title="App 2"
                                    data-gallery="portfolio-gallery-app"
                                    className="glightbox preview-link"
                                >
                                    <i className="bi bi-zoom-in" />
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div> */}
                        {/* End Portfolio Item */}
                        {/* <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img
                                src={clothes5}
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>Product 2</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href={clothes5}
                                    title="Product 2"
                                    data-gallery="portfolio-gallery-product"
                                    className="glightbox preview-link"
                                >
                                    <i className="bi bi-zoom-in" />
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div> */}
                        {/* End Portfolio Item */}
                        {/* <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img
                                src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>Branding 2</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                                    title="Branding 2"
                                    data-gallery="portfolio-gallery-branding"
                                    className="glightbox preview-link"
                                >
                                    <i className="bi bi-zoom-in" />
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div> */}
                        {/* End Portfolio Item */}
                        {/* <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img
                                src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                                    title="App 3"
                                    data-gallery="portfolio-gallery-app"
                                    className="glightbox preview-link"
                                >
                                    <i className="bi bi-zoom-in" />
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div> */}
                        {/* End Portfolio Item */}
                        {/* <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img
                                src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>Product 3</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                                    title="Product 3"
                                    data-gallery="portfolio-gallery-product"
                                    className="glightbox preview-link"
                                >
                                    <i className="bi bi-zoom-in" />
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div> */}
                        {/* End Portfolio Item */}
                        {/* <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img
                                src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>Branding 3</h4>
                                <p>Lorem ipsum, dolor sit</p>
                                <a
                                    href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                                    title="Branding 2"
                                    data-gallery="portfolio-gallery-branding"
                                    className="glightbox preview-link"
                                >
                                    <i className="bi bi-zoom-in" />
                                </a>
                                <a
                                    href="https://mfbclothes.com.ar/productos/organic-look/"
                                    title="More Details"
                                    className="details-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-link-45deg" />
                                </a>
                            </div>
                        </div> */}
                        {/* End Portfolio Item */}
                    </div>
                    {/* End Portfolio Container */}
                </div>
            </div>
        </section>

    )
}

export default ClothesSection