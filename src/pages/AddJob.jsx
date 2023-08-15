import React, { useState } from "react";
import "./AddJob.css"; // Import your CSS file

const AddJob = () => {
  const [desc, setDesc] = useState("");
  const [exp, setExp] = useState("");
  const [profile, setProfile] = useState("");
  const [techs, setTechs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      // id: Math.random().toString(),
      desc: desc,
      exp: parseInt(exp),
      profile: profile,
      techs: techs.split(",").map((tech) => tech.trim()),
    };
    console.log(newJob);

    fetch(`${process.env.REACT_APP_URL}/post`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((v) => {
        v.json();
      })
      .then((v) => console.log("Success:", v));

    // Clear input fields after submission
    setDesc("");
    setExp("");
    setProfile("");
    setTechs("");
  };

  return (
    <>
      <p className="heading" style={{ marginBottom: "0px", fontSize: "45px" }}>
        Post New Job <code style={{ color: "green" }}>Opportunities</code>
      </p>
      <div className="job-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Experience (years)"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Profile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={techs}
            onChange={(e) => setTechs(e.target.value)}
            required
          />
          <button type="submit">Add Job Opportunitie</button>
        </form>
      </div>
    </>
  );
};

export default AddJob;
