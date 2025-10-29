import Header from "../Components/shared/Header";
import { Link } from "react-router";
import "../css/companyDashboardStyle.css";

function CompanyDashboard() {
  return (
    <div className="manage-container container py-5">
      <div className="header text-center mb-4">
        <Header h1="Mange Job" inSpan="Postings" />
        <Link
          to="/company-post-job"
          className="myBtn badge text-decoration-none fs-6 p-2"
        >
          + Post New Job
        </Link>
      </div>

      <div className="job-posts d-flex flex-column gap-4">
        <div className="job-post d-flex justify-content-between align-items-center p-4 rounded-3 bg-white shadow-sm">
          <div className="job-title d-flex flex-column align-items-start">
            <h5 className="fw-semibold">FrontEnd Developer</h5>
            <p className="text-muted mb-0">Egypt</p>
          </div>
          <div className="job-details d-flex flex-wrap justify-content-end gap-4 align-items-center text-center">
            <p className="badge bg-success">Full Time</p>
            <div className="applicants d-flex gap-2 align-items-center">
              <p className="badge bg-warning text-dark">55</p>
              <p className="text-muted">Applicants</p>
            </div>
            <p className="text-muted">Posted Oct 30</p>
            <Link to="/company-post-job" className="myBtn btn btn-sm">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
