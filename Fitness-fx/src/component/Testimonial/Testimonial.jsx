import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testimonial.css";

import testimonial1 from "../../assets/img/kidus2.jpg";
import testimonial2 from "../../assets/images (4).jpg";
import testimonial3 from "../../assets/kidus30.JPG";

const testimonialsData = [
  {
    image: testimonial1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?",
    name: "Client Name",
    profession: "Profession",
    rating: 4,
  },
  {
    image: testimonial2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
  },
  {
    image: testimonial3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?",
    name: "Client Name",
    profession: "Profession",
    rating: 4,
  },
];

const Testimonial = () => {
  return (
    <div className="container-fluid testimonial bg-dark py-5" style={{ marginBottom: "90px" }}>
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-4 text-white">What Our Customers Are Saying</h1>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item mx-auto" style={{ maxWidth: "900px", textAlign: "center" }}>
                <span className="fa fa-quote-left fa-3x quote-icon"></span>
                <div className="testimonial-img mb-4">
                  <img src={testimonial.image} className="img-fluid" alt={testimonial.name} />
                </div>
                <p className="fs-4 text-white mb-4">{testimonial.text}</p>
                <div className="d-block">
                  <h4 className="text-white">{testimonial.name}</h4>
                  <p className="m-0 pb-3">{testimonial.profession}</p>
                  <div className="d-flex justify-content-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${i < testimonial.rating ? "text-primary" : "text-white"}`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;