import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ClassTimetable.css";
import Breadcrumb from "../../Breadcrumb";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const timetableData = [
  {
    time: "6.00am - 8.00am",
    classes: [
      { day: "Monday", title: "WEIGHT LOOSE", teacher: "RLefew D. Loee", category: "workout" },
      { day: "Tuesday", title: "Cardio", teacher: "RLefew D. Loee", category: "fitness" },
      { day: "Wednesday", title: "Yoga", teacher: "Keaf Shen", category: "workout" },
      { day: "Thursday", title: "Fitness", teacher: "Kimberly Stone", category: "fitness" },
      { day: "Friday", title: "", teacher: "", category: "" },
      { day: "Saturday", title: "Boxing", teacher: "Rachel Adam", category: "motivation" },
      { day: "Sunday", title: "Body Building", teacher: "Robert Cage", category: "workout" },
    ],
  },
  // keep the rest...
];

const ClassTimetable = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section className="class-timetable-section py-5 bg-dark text-white">
      <Breadcrumb
        title="Class Timetable"
        links={[
          { name: "Home", href: "/" },
          { name: "Pages", href: "#" },
        ]}
        current="Class Timetable"
      />

      <div className="container">

        {/* FILTER CONTROLS */}
        <div className="d-flex justify-content-end mb-4 flex-wrap gap-2">
          {["all", "fitness", "motivation", "workout"].map((item) => (
            <button
              key={item}
              className={`btn ${
                filter === item ? "btn-warning" : "btn-outline-light"
              }`}
              onClick={() => setFilter(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* RESPONSIVE TABLE */}
        <div className="table-responsive">
          <table className="table table-dark table-bordered align-middle text-center">
            <thead className="table-warning text-dark">
              <tr>
                <th>Time</th>
                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetableData.map((row, idx) => (
                <tr key={idx}>
                  <td className="fw-bold text-warning">{row.time}</td>

                  {row.classes.map((cls, i) => {
                    const show =
                      filter === "all" || cls.category === filter;

                    return (
                      <td key={i}>
                        {show && cls.title ? (
                          <div className={`class-box ${cls.category}`}>
                            <div className="mobile-day d-md-none fw-bold text-warning mb-1">
                              {cls.day}
                            </div>
                            <h6 className="mb-1">{cls.title}</h6>
                            <small className="text-muted">
                              {cls.teacher}
                            </small>
                          </div>
                        ) : (
                          <span className="text-secondary">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ClassTimetable;