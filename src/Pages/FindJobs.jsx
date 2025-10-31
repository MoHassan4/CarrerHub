import { useState } from "react";
import SearchForm from "../Components/shared/SearchForm";
import Header from "../Components/shared/Header";
import "../css/FindJobs.css";

function FindJobs() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Giza, Egypt",
      type: "Full-time",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      posted: "3 hours ago",
      description:
        "We are looking for a talented Frontend Developer to join our dynamic team. You'll work on modern web applications using React and Redux.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeBase",
      location: "Cairo, Egypt",
      type: "Remote",
      skills: ["Node.js", "Express", "MongoDB", "Docker"],
      posted: "1 day ago",
      description:
        "Join our backend team to build scalable APIs and microservices using Node.js and Express. Experience with databases and Docker is a plus.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "PixelPerfect",
      location: "Alexandria, Egypt",
      type: "Full-time",
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
      posted: "2 days ago",
      description:
        "Looking for a creative designer to craft intuitive interfaces and engaging user experiences for our web and mobile products.",
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "Appify",
      location: "Remote",
      type: "Contract",
      skills: ["Flutter", "Dart", "REST APIs", "Firebase"],
      posted: "5 days ago",
      description:
        "Develop cross-platform mobile applications using Flutter and Dart. Experience with RESTful APIs and Firebase is required.",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudSync",
      location: "Cairo, Egypt",
      type: "Full-time",
      skills: ["AWS", "CI/CD", "Jenkins", "Kubernetes"],
      posted: "1 week ago",
      description:
        "Manage CI/CD pipelines and cloud infrastructure. Experience with AWS and Kubernetes is a must.",
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      company: "Marketly",
      location: "Giza, Egypt",
      type: "Part-time",
      skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
      posted: "1 week ago",
      description:
        "Execute and optimize marketing campaigns across multiple digital platforms. Analyze performance and improve engagement.",
    },
    {
      id: 7,
      title: "Data Scientist",
      company: "InsightAI",
      location: "Cairo, Egypt",
      type: "Full-time",
      skills: ["Python", "Pandas", "Machine Learning", "SQL"],
      posted: "2 weeks ago",
      description:
        "Work with large datasets to generate business insights and predictive models. Strong Python and ML experience required.",
    },
    {
      id: 8,
      title: "Full Stack Developer",
      company: "WebWorks",
      location: "Hybrid - Cairo",
      type: "Hybrid",
      skills: ["React", "Node.js", "Express", "PostgreSQL"],
      posted: "2 weeks ago",
      description:
        "We’re hiring a full stack developer to work on modern, scalable web apps using React and Node.js.",
    },
    {
      id: 9,
      title: "Project Manager",
      company: "SoftBridge",
      location: "Cairo, Egypt",
      type: "Full-time",
      skills: ["Agile", "Scrum", "Communication", "Leadership"],
      posted: "3 weeks ago",
      description:
        "Lead cross-functional teams and ensure timely project delivery following Agile methodologies. Excellent communication is a must.",
    },
    {
      id: 10,
      title: "QA Engineer",
      company: "BugZero",
      location: "Remote",
      type: "Remote",
      skills: ["Selenium", "Test Automation", "Jest", "API Testing"],
      posted: "1 month ago",
      description:
        "Ensure product quality through automated and manual testing. Knowledge of Selenium and Jest is preferred.",
    },
  ];

  const handleJobClick = (job) => setSelectedJob(job);
  const handleCloseJobModal = () => setSelectedJob(null);

  // Shared Filters Accordion (to reuse in sidebar + modal)
  const FiltersAccordion = () => (
    <div className="accordion" id="filtersAccordion">
      {/* Job Type */}
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
            {[
              "Full-time",
              "Part-time",
              "Remote",
              "Hybrid",
              "Internship",
              "Contract",
            ].map((label) => (
              <label key={label} className="user-select-none">
                <input type="checkbox" className="me-2" /> {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Career Level */}
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
            Career Level
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
        >
          <div className="accordion-body d-flex flex-column">
            {[
              "Fresh/Student",
              "Entry Level",
              "Mid Level",
              "Senior Level",
              "Management",
            ].map((label) => (
              <label key={label} className="user-select-none">
                <input type="checkbox" className="me-2" /> {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Date Posted */}
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
                <input type="checkbox" className="me-2" /> {label}
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
        {/* Header */}
        <header className="container p-3 pt-4">
          <Header
            h1={"All Job Opportunities In"}
            inSpan={"One Place"}
            p={"Your career journey starts here."}
          />
          <SearchForm />
        </header>

        {/* Mobile: Show Filters Button */}
        <div className="d-lg-none text-end mb-3">
          <button
            className="apply-btn btn btn-primary"
            onClick={() => setShowFilters(true)}
          >
            Show Filters
          </button>
        </div>

        {/* Main Section */}
        <div className="main-section bg-light d-flex flex-column flex-md-row gap-3 p-3 p-md-5 rounded">
          {/* Left (Filters) */}
          <div className="left-side-container bg-white rounded d-none d-lg-block">
            <div className="filters-container p-3">
              <h3 className="mb-2 pb-2 border-bottom">Filters</h3>
              <FiltersAccordion />
            </div>
          </div>

          {/* Right (Jobs) */}
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
                  {jobs.map((job) => (
                    <div
                      key={job.id}
                      className="job border-top py-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleJobClick(job)}
                    >
                      <h4>{job.title}</h4>
                      <div className="comp-container d-flex align-items-center gap-2 mb-2">
                        <img src="https://placehold.co/40" alt="comp-img" />
                        <p className="m-0 fw-bold">{job.company}</p>
                        <p className="m-0">-</p>
                        <p className="m-0">{job.location}</p>
                      </div>
                      <span className="bg-light px-1 rounded d-inline-block mb-2">
                        {job.type}
                      </span>
                      <ul className="job-skills list-unstyled d-flex flex-wrap gap-2 text-secondary mb-2">
                        {job.skills.map((s, i) => (
                          <li key={i} className="bg-light px-1 rounded">
                            {s}
                          </li>
                        ))}
                      </ul>
                      <p className="m-0 text-success">{job.posted}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Modal (for small screens) */}
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

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedJob.title}</h5>
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
                    <h6 className="m-0">{selectedJob.company}</h6>
                    <small className="text-muted">{selectedJob.location}</small>
                  </div>
                </div>
                <p>
                  <strong>Job Type:</strong> {selectedJob.type}
                </p>
                <p>
                  <strong>Posted:</strong> {selectedJob.posted}
                </p>
                <h6>Description</h6>
                <p>{selectedJob.description}</p>
                <h6>Skills Required</h6>
                <ul className="d-flex flex-wrap gap-2 list-unstyled">
                  {selectedJob.skills.map((skill, i) => (
                    <li key={i} className="bg-light px-2 py-1 rounded">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  className="close-btn btn btn-secondary"
                  onClick={handleCloseJobModal}
                >
                  Close
                </button>
                <button className="apply-btn btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FindJobs;
