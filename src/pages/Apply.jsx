import React from "react";
import "./Apply.css"; // Import your CSS file

const Apply = () => {
  return (
    <div className="space">
      <div className="success-container">
        <div className="success-card">
          <img
            className="success-image"
            src="https://image.freepik.com/free-vector/success-concept-illustration_114360-1213.jpg"
            alt="Success"
          />
          <h2 className="success-heading">Application Successful</h2>
          <p className="success-text">
            Thank you for applying to the job. We will get back to you soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apply;
