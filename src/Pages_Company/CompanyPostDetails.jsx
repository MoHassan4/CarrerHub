import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CompanyPostDetails() {
  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link
          to="/company-dashboard"
          className="text-decoration-none text-secondary fw-semibold"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Dashboard
        </Link>
      </div>

      <div className="bg-light rounded shadow-sm mb-4 p-3">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h3 className="fw-bold mb-2">Frontend Developer</h3>
            <p className="mb-1 text-muted">
              <strong>Company:</strong> Haso
            </p>
            <p className="mb-0 text-muted">
              <strong>Location:</strong> Egypt
            </p>
          </div>
          <div className="text-end">
            <p className="badge bg-success fs-6">Full Time</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm mb-4 p-3">
        <h5 className="fw-semibold mb-3">Job Description</h5>
        <p className="text-muted">
          We are looking for a passionate Frontend Developer to join our team.
          You will be responsible for implementing visual elements and
          interactive features that engage users and deliver a smooth
          experience.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">Requirements</h5>
        <ul className="text-muted">
          <li>Proficiency in React.js and modern JavaScript (ES6+)</li>
          <li>Strong understanding of HTML, CSS, and responsive design</li>
          <li>Experience with Git and REST APIs</li>
          <li>Good communication and teamwork skills</li>
        </ul>
      </div>

      <div className="bg-white rounded shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-semibold mb-0">Applicants</h5>
          <span className="badge bg-warning text-dark fs-6">55</span>
        </div>

        <div className="applicants-list">
          <div className="applicant-item d-flex align-items-center gap-3 border-bottom py-3">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="2x"
              className="text-warning"
            />
            <div>
              <p className="fw-medium mb-0">Amr Mousa</p>
              <small className="text-muted">
                Frontend Developer Candidate{" "}
                <Link
                  className="text-decoration-none"
                  style={{ color: "#ff5722" }}
                >
                  View More..
                </Link>
              </small>
            </div>
          </div>
          <div className="applicant-item d-flex align-items-center gap-3 border-bottom py-3">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="2x"
              className="text-warning"
            />
            <div>
              <p className="fw-medium mb-0">Amr Mousa</p>
              <small className="text-muted">
                Frontend Developer Candidate{" "}
                <Link
                  className="text-decoration-none"
                  style={{ color: "#ff5722" }}
                >
                  View More..
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPostDetails;
