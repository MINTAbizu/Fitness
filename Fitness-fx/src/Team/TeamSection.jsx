import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TeamSection.css";

// Import your team images
import team1 from "../../assets/img/team/team-1.jpg";
import team2 from "../../assets/img/team/team-2.jpg";
import team3 from "../../assets/img/team/team-3.jpg";
import team4 from "../../assets/img/team/team-4.jpg";
import team5 from "../../assets/img/team/team-5.jpg";
import team6 from "../../assets/img/team/team-6.jpg";

function TeamSection() {
  const teamMembers = [
    { id: 1, name: "Athart Rachel", role: "Gym Trainer", image: team1 },
    { id: 2, name: "Athart Rachel", role: "Gym Trainer", image: team2 },
    { id: 3, name: "Athart Rachel", role: "Gym Trainer", image: team3 },
    { id: 4, name: "Athart Rachel", role: "Gym Trainer", image: team4 },
    { id: 5, name: "Athart Rachel", role: "Gym Trainer", image: team5 },
    { id: 6, name: "Athart Rachel", role: "Gym Trainer", image: team6 },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <section className="team-section spad">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="section-title">
              <span>Our Team</span>
              <h2>TRAIN WITH EXPERTS</h2>
            </div>
            <a href="#" className="primary-btn btn-normal appointment-btn">
              Appointment
            </a>
          </div>
        </div>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          arrows
          swipeable
          draggable
          containerClass="team-carousel"
          itemClass="team-carousel-item"
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="ts-item" style={{ backgroundImage: `url(${member.image})` }}>
              <div className="ts_text">
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default TeamSection;