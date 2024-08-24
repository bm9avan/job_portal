import React, { useEffect, useState } from "react";
import Job from "../components/Job";
import "./Jobs.css";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [clear, setClear] = useState(null);
  const [data, setData] = useState("loading");

  function getAllJobsData() {
    setData("loading");
    setSearch("");
    setClear(null);
    fetch(`${process.env.REACT_APP_URL}/get`)
      .then((v) => v.json())
      .then((v) => setData(v));
  }

  useEffect(() => {
    getAllJobsData();
  }, []);

  function searchHandler(e) {
    e.preventDefault();
    setClear("clear");
    setData("loading");
    if (search.trim().length === 0) {
      return;
    }
    fetch(`${process.env.REACT_APP_URL}/get/${search}`)
      .then((v) => v.json())
      .then((v) => setData(v));
  }

  return (
    <>
      <p className="heading" style={{ marginBottom: "0px", fontSize: "45px" }}>
        Your Gateway to <code style={{ color: "green" }}>Opportunities</code>:
        Explore JOB PORTAL.
      </p>

      <div>
        <form
          className="search"
          onSubmit={searchHandler}
          style={{ flexDirection: "row", marginTop: "25px" }}
        >
          <input
            type="search"
            name="q"
            id="search"
            value={search}
            placeholder="Enter text to search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit">Search</button>
          {search !== "" && clear && (
            <button type="button" onClick={getAllJobsData}>
              Clear
            </button>
          )}
        </form>
      </div>
      <div className="job-list">
        {data === "loading" ? (
          <p className="heading" style={{ fontSize: "35px" }}>
            Loading...
          </p>
        ) : data.length === 0 ? (
          <p className="heading" style={{ fontSize: "35px" }}>
            Search not found!
          </p>
        ) : (
          data.map((job) => <Job key={job.id} job={job} />)
        )}
      </div>
    </>
  );
};

export default Jobs;
