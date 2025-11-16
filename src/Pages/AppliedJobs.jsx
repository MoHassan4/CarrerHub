import React, { useEffect, useState } from "react";
import { fetchAppliedJobs } from "../services/Users.Get_Update_Profile.service";

function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [btnState, setBtnState] = useState("all");
  const [errorMsg, setErrorMsg] = useState(
    "You haven’t applied to any jobs yet"
  );

  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobs = await fetchAppliedJobs();
        setAppliedJobs(jobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    getJobs();
  }, []);

  const filteredJobs =
    btnState === "all"
      ? appliedJobs
      : appliedJobs.filter((job) => job.status === btnState);

  return (
    <div className="container mt-5">
      <div className="card p-3 shadow-lg w-100">
        <div className="d-flex flex-column flex-lg-row justify-content-center my-3 gap-3">
          <button
            className={`btn ${
              btnState === "all" ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => {
              setBtnState("all");
              setErrorMsg("You haven’t applied to any jobs yet");
            }}
          >
            All
          </button>
          <button
            className={`btn ${
              btnState === "pending" ? "btn-warning" : "btn-outline-secondary"
            }`}
            onClick={() => {
              setBtnState("pending");
              setErrorMsg("You have no pending applications at the moment");
            }}
          >
            Pending
          </button>
          <button
            className={`btn ${
              btnState === "accepted" ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => {
              setBtnState("accepted");
              setErrorMsg("You have no accepted applications at the moment");
            }}
          >
            Accepted
          </button>
          <button
            className={`btn ${
              btnState === "rejected" ? "btn-danger" : "btn-outline-secondary"
            }`}
            onClick={() => {
              setBtnState("rejected");
              setErrorMsg("You have no rejected applications at the moment");
            }}
          >
            Rejected
          </button>
        </div>

        <h3 className="mb-3">Jobs You Applied For</h3>

        <div className="d-flex flex-column gap-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job._id}
                className="p-3 border rounded bg-white shadow-lg d-flex flex-column align-items-start"
              >
                <h5 className="mb-1">{job.jobId?.jobTitle}</h5>
                <small className="text-muted">
                  {job.companyId?.companyName} — {job.jobId?.jobLocation}
                </small>
                <span className="badge orange-bg text-dark mt-1">
                  {job.jobId?.jobType}
                </span>
                <small className="text-black mt-1">
                  Applied: {new Date(job.appliedAt).toLocaleDateString()}
                </small>
                <small
                  className={
                    job.status === "pending"
                      ? "text-warning mt-1"
                      : job.status === "rejected"
                      ? "text-danger mt-1"
                      : "text-success mt-1"
                  }
                >
                  <span className="text-black">Status: </span>
                  {job.status === "pending"
                    ? "Under Review"
                    : job.status === "rejected"
                    ? "Rejected"
                    : "Accepted"}
                </small>
              </div>
            ))
          ) : (
            <p className="text-secondary">{errorMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppliedJobs;
