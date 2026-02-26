import React, { useState } from "react";
import "./About.css";
import about  from "../../assets/img/coatching2.jpg";
const tabData = [
  {
    id: "tab-1",
    title: "Our Mission",
    icon: "fas fa-rocket",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    color: "#0d6efd", // blue
    padding: "10px 25px",
    margin: "0 10px 10px 0",
  },
  {
    id: "tab-2",
    title: "Our Vision",
    icon: "fas fa-eye",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    color: "#198754", // green
    padding: "10px 25px",
    margin: "0 10px 10px 0",
  },
  {
    id: "tab-3",
    title: "Our Goal",
    icon: "fas fa-bullseye",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    color: "#dc3545", // red
    padding: "10px 25px",
    margin: "0 10px 10px 0",
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className="container-fluid about pt-5">
      <div className="container pt-5">
        <div className="row g-5">
          {/* Left Content */}
          <div className="col-xl-6">
            <div className="about-content h-100">
              <h4 className="text-primary">About Fitness Center</h4>
              <h1 className="display-4 text-white mb-4"  style={{fontSize:59,fontWeight:900}}>
                We are the best at fulfilling your potential and achieving your goals.
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In impedit accusantium autem quaerat natus nesciunt veritatis fugiat dolor eaque fuga.
              </p>

              {/* Tabs */}
              <div className="tab-class pb-4">
                <div className="d-flex flex-wrap mb-3">
                  {tabData.map((tab) => (
                    <button
                      key={tab.id}
                      className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        backgroundColor: activeTab === tab.id ? tab.color : "#fff",
                        color: activeTab === tab.id ? "#fff" : "#000",
                        border: `2px solid ${tab.color}`,
                        borderRadius: "8px",
                        padding: tab.padding,
                        margin: tab.margin,
                        cursor: "pointer",
                        transition: "0.3s",
                        fontWeight: "600",
                      }}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                  {tabData.map(
                    (tab) =>
                      activeTab === tab.id && (
                        <div key={tab.id} className="tab-pane show active p-0">
                          <div className="row">
                            <div className="col-12">
                              <div className="d-flex align-items-center border-top border-bottom py-4">
                                <span className={`${tab.icon} text-white fa-4x me-4`}></span>
                                <p className="mb-0" style={{color:"white"}}>{tab.content}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <a href="#" className="btn btn-primary py-3 px-5">
                    Make Appointment
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-shrink-0 ps-4">
                    <a href="#" className="btn btn-light btn-lg-square position-relative">
                      <i className="fa fa-phone-alt fa-2x"></i>
                      <div className="position-absolute" style={{ top: "5px", right: "5px" }}>
                        <span>
                          <i className="fa fa-comment-dots text-dark"></i>
                        </span>
                      </div>
                    </a>
                    <div className="d-flex flex-column ms-3">
                      <span>Call to Our Experts</span>
                      <a href="tel:+01234567890">
                        <span className="text-white">Free: +251000000000</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-xl-6">
            <div className="about-img h-100">
              <div className="about-img-inner d-flex h-100">
                <img
                  src={about}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover"
                    }}
                  alt="About Fitness"
               

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;