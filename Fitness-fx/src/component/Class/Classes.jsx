import React from "react";
import "./class.css"; // Import the CSS for styling

// Array of courses
const coursesData = [
  {
    title: "Gym Fitness Class",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.",
    icon: "img/icon-1.png",
    trainer: "Paul Flavius",
    date: "Saturday",
    time: "06.00 - 07.00",
    buttonColor: "#1abc9c", // turquoise
  },
  {
    title: "Power Lifting Class",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.",
    icon: "img/icon-2.png",
    trainer: "Paul Flavius",
    date: "Saturday",
    time: "06.00 - 07.00",
    buttonColor: "#e74c3c", // red
  },
  {
    title: "Body Building Class",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.",
    icon: "img/icon-3.png",
    trainer: "Paul Flavius",
    date: "Saturday",
    time: "06.00 - 07.00",
    buttonColor: "#3498db", // blue
  },
  {
    title: "Aerobics & Skipping Class",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.",
    icon: "img/icon-4.png",
    trainer: "Paul Flavius",
    date: "Saturday",
    time: "06.00 - 07.00",
    buttonColor: "#f39c12", // orange
  },
  {
    title: "Boxing Class",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.",
    icon: "img/icon-5.png",
    trainer: "Paul Flavius",
    date: "Saturday",
    time: "06.00 - 07.00",
    buttonColor: "#9b59b6", // purple
  },
  {
    title: "Cardio Class",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora illo placeat.",
    icon: "img/icon-6.png",
    trainer: "Paul Flavius",
    date: "Saturday",
    time: "06.00 - 07.00",
    buttonColor: "#2ecc71", // green
  },
];

const Classes = () => {
  return (
    <div className="container-fluid courses overflow-hidden py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Our Courses</h4>
          <h1 className="display-4 text-white mb-4">Our Highlights Below</h1>
          <p className="text-white mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate
            recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem
            autem obcaecati, ipsam mollitia hic.
          </p>
        </div>

        <div className="row gy-4 gx-0 justify-content-center">
          {coursesData.map((course, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="courses-item wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`}>
                <div className="courses-item-inner p-4">
                  <div className="d-flex justify-content-between mb-4">
                    <div className="courses-icon-img p-3">
                      <img src={course.icon} className="img-fluid" alt={course.title} />
                    </div>
                    <div className="data-info d-flex flex-column">
                      <div className="courses-trainer d-flex align-items-center mb-1">
                        <div className="me-2" style={{ width: "25px", height: "25px" }}>
                          <img src="img/testimonial-3.jpg" className="img-fluid" alt={course.trainer} />
                        </div>
                        <p className="mb-0">{course.trainer}</p>
                      </div>
                      <div className="courses-date">
                        <p className="mb-1">Date: {course.date}</p>
                        <p className="mb-0">Time: {course.time}</p>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="d-inline-block h4 mb-3">
                    {course.title}
                  </a>
                  <p className="mb-4">{course.description}</p>
                  <a
                    href="#"
                    className="btn"
                    style={{
                      backgroundColor: course.buttonColor,
                      color: "#fff",
                      padding: "12px 28px",
                      marginTop: "15px",
                      borderRadius: "6px",
                    }}
                  >
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 text-center">
            <a href="#" className="btn btn-primary py-3 px-5 mt-4">
              <span>More Courses</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;