import React from "react";
import "./Goal.css";

import goalImg from "../../assets/ETHIOAESTHETICS/h4.jpg";
import icon1 from "../../assets/img/icon-1.png";
import icon2 from "../../assets/img/icon-5.png";

const goals = [
  {
    icon: icon1,
    title: "Free Fitness Training",
    description:
      "Professional guidance with personalized programs designed to help you build strength and confidence.",
  },
  {
    icon: icon2,
    title: "Cardio & Strength",
    description:
      "Balanced training plans combining endurance and muscle-building workouts for complete fitness.",
  },
];

const GoalSection = () => {
  return (
    <section className="goal-section">
      <div className="goal-container">
        {/* Left Content */}
        <div className="goal-content">
          <span className="goal-tag">Fitness Goal</span>
          <h2 className="goal-title">
            Complete Your Possibilities & Achieve Your Fitness Goals
          </h2>

          <div className="goal-list">
            {goals.map((item, index) => (
              <div key={index} className="goal-card">
                <div className="goal-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="goal-btn">Read Details</button>
        </div>

        {/* Right Image */}
        <div className="goal-image">
          <img src={goalImg} alt="Fitness Goals" />
        </div>
      </div>
    </section>
  );
};

export default GoalSection;