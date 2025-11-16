import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchForm from "../Components/shared/SearchForm";
import Header from "../Components/shared/Header";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/FindJobs.css";

function FindJobs() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  // FILTER STATES
  const [jobTypeFilters, setJobTypeFilters] = useState([]);
  const [jobRateFilters, setJobRateFilters] = useState([]);
  const [datePostedFilters, setDatePostedFilters] = useState([]);

  const { q, country } = useParams();

  const countries = [
    "Egypt",
    "Saudi Arabia",
    "United Arab Emirates",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
    "Jordan",
    "Lebanon",
    "Iraq",
    "Syria",
    "Yemen",
    "Libya",
    "Sudan",
    "Morocco",
    "Tunisia",
    "Algeria",
    "Palestine",
  ];
  const finalQuery = q && !countries.includes(q) ? q : null;
  const finalCountry = country || (q && countries.includes(q) ? q : null);

  const fetchJobs = async () => {
    const token = JSON.parse(localStorage.getItem("user"))?.token || null;

    try {
      let response;

      if (finalQuery && finalCountry) {
        response = await axios.get(
          `/api/v1/user/jobs/job-search?q=${finalQuery}&country=${finalCountry}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else if (finalQuery) {
        response = await axios.get(
          `/api/v1/user/jobs/job-search?q=${finalQuery}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else if (finalCountry) {
        response = await axios.get(
          `/api/v1/user/jobs/location/${finalCountry}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        response = await axios.get(`/api/v1/user/jobs/job-search`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      if (response.data.status) {
        setJobs(response.data.jobs);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [q, country]);

  useEffect(() => {
    console.log("Job Type Filters:", jobTypeFilters);
    console.log("Job Rate Filters:", jobRateFilters);
    console.log("Date Posted Filters:", datePostedFilters);
  }, [jobTypeFilters, jobRateFilters, datePostedFilters]);

  const handleJobClick = (job) => setSelectedJob(job);
  const handleCloseJobModal = () => setSelectedJob(null);

  async function handleApplyJobModal() {
    const token = JSON.parse(localStorage.getItem("user"))?.token || null;

    try {
      const response = await axios.post(
        `/api/v1/user/jobs/jobs/${selectedJob._id}/apply`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Swal.fire({
        title: response.data.status ? "Applied!" : "Oops!",
        text: response.data.message,
        icon: response.data.status ? "success" : "warning",
        background: response.data.status ? "#d4edda" : "#fff3cd",
        confirmButtonColor: "#ffc107",
      });
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "You Already Applied.",
        icon: "error",
        background: "#f8d7da",
        confirmButtonColor: "#dc3545",
      });
      console.log(err);
    }
  }

  const FiltersAccordion = () => (
    <div className="accordion" id="filtersAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Job Type
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
        >
          <div className="accordion-body d-flex flex-column">
            {["full-time", "part-time", "remote", "internship", "contract"].map(
              (label) => (
                <label key={label} className="user-select-none">
                  <input
                    type="checkbox"
                    className="me-2"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setJobTypeFilters((prev) => [...prev, label]);
                      } else {
                        setJobTypeFilters((prev) =>
                          prev.filter((item) => item !== label)
                        );
                      }
                    }}
                  />
                  {label}
                </label>
              )
            )}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Job Rate
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
        >
          <div className="accordion-body d-flex flex-column">
            {["hourly", "monthly", "yearly"].map((label) => (
              <label key={label} className="user-select-none">
                <input
                  type="checkbox"
                  className="me-2"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setJobRateFilters((prev) => [...prev, label]);
                    } else {
                      setJobRateFilters((prev) =>
                        prev.filter((item) => item !== label)
                      );
                    }
                  }}
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Date Posted
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body d-flex flex-column">
            {["Today", "This Week", "This Month", "This Year"].map((label) => (
              <label key={label} className="user-select-none">
                <input
                  type="checkbox"
                  className="me-2"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDatePostedFilters((prev) => [...prev, label]);
                    } else {
                      setDatePostedFilters((prev) =>
                        prev.filter((item) => item !== label)
                      );
                    }
                  }}
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container">
        <header className="container p-3 pt-4">
          <Header
            h1={"All Job Opportunities In"}
            inSpan={"One Place"}
            p={"Your career journey starts here."}
          />
          <SearchForm />
        </header>

        <div className="d-lg-none text-end mb-3">
          <button
            className="apply-btn btn btn-primary"
            onClick={() => setShowFilters(true)}
          >
            Show Filters
          </button>
        </div>

        <div className="main-section bg-light d-flex flex-column flex-md-row gap-3 p-3 p-md-5 rounded">
          <div className="left-side-container bg-white rounded d-none d-lg-block">
            <div className="filters-container p-3">
              <h3 className="mb-2 pb-2 border-bottom">Filters</h3>
              <FiltersAccordion />
            </div>
          </div>

          <div className="right-side-container bg-white rounded">
            <div className="jobs-container p-3">
              <div className="jobs-header border-bottom d-flex justify-content-between align-items-center">
                <h3>All Jobs</h3>
                <div className="d-flex align-items-center">
                  <p className="mb-0 me-2">Sort by:</p>
                  <select name="sort-by" id="sort-by" className="form-select">
                    <option value="relevance">Relevance</option>
                    <option value="date">Date</option>
                    <option value="country">Country</option>
                  </select>
                </div>
              </div>

              <div className="jobs-body">
                <div className="jobs-list">
                  {jobs.length === 0 ? (
                    <p>No jobs found.</p>
                  ) : (
                    jobs.map((job) => (
                      <div
                        key={job._id} // safer than job.companyId._id
                        className="job border-top py-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleJobClick(job)}
                      >
                        <h4>{job.jobTitle}</h4>
                        <div className="comp-container d-flex align-items-center gap-2 mb-2">
                          <img src="https://placehold.co/40" alt="comp-img" />
                          <p className="m-0 fw-bold">
                            {job.companyId?.companyName || "Unknown Company"}
                          </p>
                          <p className="m-0">-</p>
                          <p className="m-0">{job.jobLocation}</p>
                        </div>
                        <span className="bg-light px-1 rounded d-inline-block mb-2">
                          {job.jobType}
                        </span>
                        <ul className="job-skills list-unstyled d-flex flex-wrap gap-2 text-secondary mb-2">
                          <li className="bg-light px-1 rounded">
                            Pay: {job.jobMinPay} - {job.jobMaxPay} {job.jobRate}
                          </li>
                        </ul>
                        <p className="m-0 text-success">
                          Posted: {new Date(job.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Filters</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowFilters(false)}
                ></button>
              </div>
              <div className="modal-body">
                <FiltersAccordion />
              </div>
              <div className="modal-footer">
                <button
                  className="close-btn btn btn-secondary"
                  onClick={() => setShowFilters(false)}
                >
                  Close
                </button>
                <button
                  className="apply-btn btn btn-primary"
                  onClick={() => setShowFilters(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedJob && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedJob.jobTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseJobModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src="https://placehold.co/60" alt="company" />
                  <div>
                    <h6 className="m-0">
                      {selectedJob.companyId?.companyName || "Unknown Company"}
                    </h6>
                    <small className="text-muted">
                      {selectedJob.jobLocation}
                    </small>
                  </div>
                </div>
                <p>
                  <strong>Job Type:</strong> {selectedJob.jobType}
                </p>
                <p>
                  <strong>Posted:</strong>{" "}
                  {new Date(selectedJob.createdAt).toLocaleDateString()}
                </p>
                <h6>Description</h6>
                <p>{selectedJob.jobDescription}</p>
                <h6>Pay Range</h6>
                <p>
                  {selectedJob.jobMinPay} - {selectedJob.jobMaxPay}{" "}
                  {selectedJob.jobRate}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="close-btn btn btn-secondary"
                  onClick={handleCloseJobModal}
                >
                  Close
                </button>
                <button
                  className="apply-btn btn btn-primary"
                  onClick={handleApplyJobModal}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FindJobs;
