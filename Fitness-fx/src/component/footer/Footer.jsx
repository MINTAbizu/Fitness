import React from "react";
import "./Footer.css"; // optional for custom styles

const recentWorks = [
  "img/work-9.jpg", "img/work-10.jpg", "img/work-11.jpg", "img/work-12.jpg",
  "img/work-1.jpg", "img/work-2.jpg", "img/work-3.jpg", "img/work-4.jpg",
  "img/work-5.jpg", "img/work-6.jpg", "img/work-7.jpg", "img/work-8.jpg",
];

const Footer = () => {
  return (
    <div className="container-fluid footer py-5">
      <div className="container py-5">
        {/* Subscribe + Social */}
        <div className="row g-5 mb-5 align-items-center">
          <div className="col-lg-7">
            <div className="position-relative d-flex" style={{ transform: "skew(18deg)" }}>
              <input
                className="form-control border-0 w-100 py-3 pe-5"
                type="text"
                placeholder="Email address to Subscribe"
              />
              <button type="button" className="btn-primary py-2 px-4 ms-3">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
              <a className="btn btn-primary btn-md-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-primary btn-md-square me-3" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-primary btn-md-square me-3" href=""><i className="fab fa-instagram"></i></a>
              <a className="btn btn-primary btn-md-square me-0" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row g-5">
          {/* About */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="text-white mb-4">
                <i className="fas fa-hand-rock text-primary me-2"></i> ETHIOAESTHETICS
              </h4>
              <p className="mb-0" style={{color:'white'}}>
                Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="text-white mb-4">Quick Links</h4>
              <a href="#">Home</a>
              <a href="#">About us</a>
              <a href="#">Our Courses</a>
              <a href="#">Our Features</a>
              <a href="#">Our Blog & news</a>
              <a href="#">Testimonial</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="text-white mb-4">Contact Info</h4>
              <div className="row g-2">
                <div className="col-12 d-flex">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <div>
                    <h5 className="text-white mb-2">Address</h5>
                    <p className="mb-0" style={{color:'white'}}>Addiss Ababa</p>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  <div>
                    <h5 className="text-white mb-2">Mail Us</h5>
                    <p className="mb-0" style={{color:'white'}}>TenasGym@SPA.com</p>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <i className="fa fa-phone-alt text-primary me-2"></i>
                  <div>
                    <h5 className="text-white mb-2">Telephone</h5>
                    <p className="mb-0" style={{color:'white'}}>+251 911 123 456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Work */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="text-white mb-4">Recent Work</h4>
              <div className="row g-2">
                {recentWorks.map((img, index) => (
                  <div className="col-3" key={index}>
                    <div className="footer-item-img">
                      <a href="#"><img src={img} className="img-fluid" alt={`Work ${index + 1}`} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;