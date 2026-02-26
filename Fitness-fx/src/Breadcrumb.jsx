import React from "react";
import "./Breadcrumb.css"; // your existing CSS

const Breadcrumb = ({
  title = "BMI calculator",
  links = [
    { name: "Home", href: "./index.html" },
    { name: "Pages", href: "#" },
  ],
  current = "BMI calculator",
  bgImage = "img/breadcrumb-bg.jpg", // default background image
}) => {
  return (
    <section
      className="breadcrumb-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb-text">
              <h2>{title}</h2>
              <div className="bt-option">
                {links.map((link, idx) => (
                  <a key={idx} href={link.href}>
                    {link.name}
                  </a>
                ))}
                <span>{current}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;