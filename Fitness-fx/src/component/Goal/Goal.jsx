import React from "react";
import "./Goal.css"; // Create a CSS file for styling
import goal from "../../assets/img/kidus1.jpg"
; // Import the image
import icon1 from "../../assets/img/icon-1.png"; // Import the first icon
import icon2 from "../../assets/img/icon-5.png"; // Import the first icon


const goals = [
  {
    icon: icon1,
    title: "Free Fitness Training",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore est harum",
  },
  {
    icon: icon2,
    title: "Cardio and Strength",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore est harum",
  },
];

const GoalSection = () => {
  return (
    <div className="container-fluid goal pt-5">
      <div className="container pt-5">
        <div className="row g-5">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="goal-content">
              <h4 className="text-primary">Fitness Goal</h4>
              <h1 className="display-4 mb-4">
                Complete your possibilities, Achieve Your Fitness Goals.
              </h1>

              {/* Goals List */}
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className={`goal-item d-flex p-4 ${index !== goals.length - 1 ? "mb-4" : ""}`}
                >
                  <div className="d-flex me-4">
                    <div
                      className="bg-primary d-inline-flex align-items-center justify-content-center"
                      style={{ width: "80px", height: "80px", borderRadius: "12px" }}
                    >
                      <img src={goal.icon} className="img-fluid" alt={goal.title} />
                    </div>
                  </div>
                  <div>
                    <h4>{goal.title}</h4>
                    <p className="text-white mb-0">{goal.description}</p>
                  </div>
                </div>
              ))}

              {/* Button */}
              <div className="ms-1 mt-3">
                <a
                  href="#"
                  className="btn btn-primary py-3 px-5 ms-2"
                  style={{ borderRadius: "10px", fontWeight: "600", transition: "0.3s" }}
                >
                  <span>Read Details</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="h-50"  style={{width:'100%'}} >
              <img
                src={goal}
                className=" h-100"
                style={{ objectFit: "cover", borderRadius: "12px" }}
                alt="Fitness Goals"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSection;