import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // correct import for Swiper v9+
import "swiper/css";
import "swiper/css/navigation";
import "./HeroCarousel.css"; // your CSS file with hero-bg-half-1, hero-bg-half-2, etc.

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      loop
      autoplay={{ delay: 5000 }}
      slidesPerView={1}
      className="header-carousel overflow-hidden bg-dark"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="header-carousel-item hero-section">
          <div className="hero-bg-half-1"></div>
          <div className="carousel-caption">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7">
                  <div className="text-sm-center text-md-start">
                    <h4 className="text-primary text-uppercase fw-bold mb-4">
                      Welcome to our Fitness Center
                    </h4>
                    <h1 className="display-1 text-white mb-4" style={{fontSize:59,fontWeight:900}}>
                      The best gym center is now in your city
                    </h1>
                    <p className="mb-5 fs-5" style={{fontSize:59,fontWeight:900}}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                      <a className="btn btn-dark py-3 px-4 px-md-5 me-2" href="#">
                        <i className="fas fa-play-circle me-2"></i> Watch Video
                      </a>
                      <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="header-carousel-item hero-section">
          <div className="hero-bg-half-2"></div>
          <div className="carousel-caption">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7">
                  <div className="text-sm-center text-md-start">
                    <h4 className="text-primary text-uppercase fw-bold mb-4">
                      Welcome to our Fitness Center
                    </h4>
                    <h1 className="display-2 text-white mb-4" style={{fontSize:59,fontWeight:900}}>
                      Stay healthy by exercising at the best gym center
                    </h1>
                    <p className="mb-5 fs-5">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                      <a className="btn btn-dark py-3 px-4 px-md-5 me-2" href="#">
                        <i className="fas fa-play-circle me-2"></i> Watch Video
                      </a>
                      <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;