import React from "react";
import "./PricingSection.css";

function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      title: "Basic Plan",
      price: "$29",
      period: "month",
      features: [
        "Access to gym equipment",
        "1 personal training session",
        "Free fitness consultation",
      ],
    },
    {
      id: 2,
      title: "Standard Plan",
      price: "$49",
      period: "month",
      features: [
        "All Basic features",
        "3 personal training sessions",
        "Nutrition plan included",
      ],
    },
    {
      id: 3,
      title: "Premium Plan",
      price: "$79",
      period: "month",
      features: [
        "All Standard features",
        "Unlimited personal training",
        "Spa & massage access",
      ],
    },
  ];

  return (
    <section className="pricing-section spad">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <span>Pricing Plans</span>
              <h2>CHOOSE YOUR PLAN</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6">
              <div className="ps-item">
                <h3>{plan.title}</h3>
                <div className="pi-price">
                  <h2>{plan.price}</h2>
                  <span>per {plan.period}</span>
                </div>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a href="#" className="primary-btn pricing-btn">
                  Choose Plan
                </a>
                <i className="thumb-icon fa fa-thumbs-up"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;