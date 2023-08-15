import React from "react";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="job-card">
        <h2>{job.profile}</h2>
        <p>{job.desc}</p>
        <p>Experience: {job.exp} years</p>
        <div className="techs">
          {job.techs.map((tech, idx) => (
            <span key={job.id + idx}>{tech}</span>
          ))}
        </div>
        <button onClick={() => navigate("/apply")} className="details-button">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Job;
