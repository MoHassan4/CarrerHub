import { useState } from "react";

function TargetJobForm({ next }) {
  const [jobLevel, setJobLevel] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form reload

    if (!jobLevel || !jobTitle || !jobLocation) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    next(); // proceed to next step
  };

  return (
    <div className="container">
      <form className="form-control p-4" onSubmit={handleSubmit}>
        <h3>Hi Name, What's Your Dream Job?</h3>
        <p>Set your target job to help employers find the right fit for you.</p>
        <hr />

        <div className="form-body d-flex flex-column gap-3">
          <div>
            <label htmlFor="job-levels" className="form-label">
              Target Job Level *
            </label>
            <select
              id="job-levels"
              className="p-2 rounded form-control"
              required
              value={jobLevel}
              onChange={(e) => setJobLevel(e.target.value)}
            >
              <option value="" disabled>
                Select level
              </option>
              <option value="fresh">Fresh/Student</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <option value="management">Management</option>
            </select>
          </div>

          <div>
            <label htmlFor="job-title" className="form-label">
              Target Job Title *
            </label>
            <input
              id="job-title"
              list="job-titles"
              className="p-2 rounded form-control"
              required
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <datalist id="job-titles">
              <option value="Frontend Web Developer" />
              <option value="Backend Web Developer" />
              <option value="Mobile Developer" />
              <option value="Fullstack Developer" />
              <option value=".NET Developer" />
              <option value="Software Engineer" />
              <option value="Database Admin" />
              <option value="DevOps Engineer" />
              <option value="Software Tester" />
            </datalist>
          </div>

          <div>
            <label htmlFor="job-location" className="form-label">
              Target Job Location *
            </label>
            <select
              id="job-location"
              className="p-2 rounded form-control"
              required
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            >
              <option value="" disabled>
                Select location
              </option>
              <option value="egypt">Egypt</option>
              <option value="uae">UAE</option>
              <option value="saudi">Saudi Arabia</option>
              <option value="kuwait">Kuwait</option>
              <option value="qatar">Qatar</option>
              <option value="bahrain">Bahrain</option>
              <option value="morocco">Morocco</option>
              <option value="tunisia">Tunisia</option>
              <option value="algeria">Algeria</option>
              <option value="libya">Libya</option>
              <option value="sudan">Sudan</option>
              <option value="jordan">Jordan</option>
              <option value="lebanon">Lebanon</option>
              <option value="oman">Oman</option>
              <option value="iraq">Iraq</option>
              <option value="palestine">Palestine</option>
            </select>
          </div>

          {error && <p className="text-danger">{error}</p>}

          <button
            type="submit"
            className="ca-form-btn btn btn-primary py-2 px-3 my-4 align-self-end w-25"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default TargetJobForm;
