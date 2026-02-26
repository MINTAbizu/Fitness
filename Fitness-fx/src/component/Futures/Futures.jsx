import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import modules from swiper/modules
import { Autoplay, Pagination } from "swiper/modules";

import feature1 from "../../assets/kidus30.JPG"; // Import feature images
import feature2 from "../../assets/kidus30.JPG";
import feature3 from "../../assets/kidus30.JPG";
import feature4 from "../../assets/kidus30.JPG";

// Import styles
import "swiper/css";
import "swiper/css/pagination";

import "./Futures.css"; // Custom styles

const features = [
  {
    img: feature1,
    title: "Work Your Butt Off",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,",
  },
  {
    img: feature2,
    title: "Get In The Groove",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,",
  },
  {
    img: feature3,
    title: "It's more Than A Game",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,",
  },
  {
    img: feature4,
    title: "Get Fit Don't Quit",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati voluptatum,",
  },
];

const FeatureSection = () => {
  return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary" style={{fontSize:28,color:"orange", fontWeight:800}}>Why choose us?</h4>
          <h1 className="display-4 mb-4" style={{fontSize:28,color:"orange", fontWeight:800}}>Our Highlights Below</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="feature-item">
                <div className="feature-img">
                  <img src={feature.img} alt={feature.title} className="img-fluid w-100" />
                </div>
                <div className="feature-content p-4">
                  <h4 className="mb-3">{feature.title}</h4>
                  <p className="mb-4">{feature.description}</p>
                  <a href="#" className="btn btn-primary py-2 px-4">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="feature-shaps"></div>
      </div>
    </div>
  );
};

export default FeatureSection;