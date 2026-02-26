import Breadcrumb from "../../Breadcrumb";





import React, { useState } from "react";
import "./BMI.css"; // keep your existing CSS

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInM = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInM * heightInM);
    setBmi(bmiValue.toFixed(1));

    // Determine weight status
    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) setStatus("Healthy");
    else if (bmiValue >= 25 && bmiValue <= 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (

    
    <section className="bmi-calculator-section spad">
         <Breadcrumb
        title="BMI Calculator"
        bgImage="assets/img/breadcrumb-bg.jpg"
        links={[
          { name: "Home", href: "./index.html" },
          { name: "Pages", href: "#" },
        ]}
        current="BMI Calculator"
      />
      <div className="container">
        <div className="row">
          {/* BMI Chart */}
          <div className="col-lg-6">
            <div className="section-title chart-title">
              <span>Check Your Body</span>
              <h2>BMI CALCULATOR CHART</h2>
            </div>
            <div className="chart-table">
              <table>
                <thead>
                  <tr>
                    <th>BMI</th>
                    <th>WEIGHT STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="point">Below 18.5</td>
                    <td>Underweight</td>
                  </tr>
                  <tr>
                    <td className="point">18.5 - 24.9</td>
                    <td>Healthy</td>
                  </tr>
                  <tr>
                    <td className="point">25.0 - 29.9</td>
                    <td>Overweight</td>
                  </tr>
                  <tr>
                    <td className="point">30.0 - and Above</td>
                    <td>Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BMI Form */}
          <div className="col-lg-6">
            <div className="section-title chart-calculate-title">
              <span>Check Your Body</span>
              <h2>CALCULATE YOUR BMI</h2>
            </div>
            <div className="chart-calculate-form">
              <p>
                Enter your height and weight to calculate your Body Mass Index (BMI) and find out your weight
                status.
              </p>
              <form onSubmit={calculateBMI}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="number"
                      placeholder="Height / cm"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      placeholder="Weight / kg"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      placeholder="Sex"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12">
                    <button type="submit">Calculate</button>
                  </div>
                </div>
              </form>

              {/* Display result */}
              {bmi && (
                <div className="bmi-result">
                  <h4>Your BMI: {bmi}</h4>
                  <p>Status: {status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;