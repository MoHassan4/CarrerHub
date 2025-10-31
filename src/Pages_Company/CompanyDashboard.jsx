import Header from "../Components/shared/Header";
import { Link } from "react-router";
import "../css/companyDashboardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function CompanyDashboard() {
  return (
    <div className="manage-container container py-5">
      <div className="p-3 rounded shadow-lg d-flex flex-column justify-content-center align-items-center bg-light">
        <FontAwesomeIcon
          icon={faGear}
          size="2x"
          className="text-warning align-self-end mt-2"
        />
        <FontAwesomeIcon
          icon={faUserCircle}
          size="4x"
          className="text-warning"
        />
        <h4 className="mt-3">CareerHub</h4>
        <p className="text-secondary">Company</p>
      </div>

      <div className="bg-white rounded shadow-sm my-4 p-3">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <p className="mb-1 text-muted">
              <strong>Industry:</strong> Software Development
            </p>
            <p className="mb-0 text-muted">
              <strong>Headquarters:</strong> Cairo, Egypt
            </p>
            <p className="mb-0 text-muted">
              <strong>Founded Year:</strong> 2015
            </p>
          </div>
          <div className="text-end d-flex flex-column align-items-end gap-1">
            <p className="badge bg-primary fs-6">About Us</p>
            <p className="badge bg-success fs-6">Full Time</p>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-muted mb-0">
            CareerHub is a leading tech company specializing in web and mobile
            solutions. Our mission is to connect talented developers with
            innovative startups worldwide, fostering a community of creativity
            and growth.
          </p>
        </div>
      </div>

      <div className="header text-center mb-4 mt-5">
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
            <Link
              to="/company-dashboard/company-post-details"
              className="myBtn btn btn-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
