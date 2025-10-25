import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../css/ProfileStyle.css";

function Profile() {
  return (
    <div className="profile container">
      <div className="">
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
          <h4 className="mt-3">Amr Mousa</h4>
          <p className="text-secondary">Job Seeker</p>
        </div>

        <div className="row pt-5 gap-5 gap-lg-0 justify-content-center">
          <div className="basic-infos col-12 col-md-6 col-lg-4 text-center">
            <h5 className="mb-3">Your Informations</h5>
            <div className="p-3 rounded shadow-lg d-flex flex-column justify-content-between">
              <div className="basic-info email">
                <p>Email</p>
                <p className="bg-warning">test@gmail.com</p>
              </div>
              <hr />
              <div className="basic-info phone">
                <p>Phone</p>
                <p className="bg-warning">01015052567</p>
              </div>
            </div>
          </div>

          <div className="experience col-12 col-md-6 col-lg-4 text-center">
            <h5 className="mb-3">Experience</h5>
            <div className="p-3 rounded shadow-lg bg-light d-flex flex-column gap-3">
              <div className="experience-item text-start border-start border-4 border-warning ps-3">
                <h6 className="fw-bold mb-1">Frontend Developer</h6>
                <p className="mb-1 text-secondary">Freelance — 2023–Present</p>
                <small className="text-muted">
                  Building responsive websites using React.js and Bootstrap.
                </small>
              </div>

              <div className="experience-item text-start border-start border-4 border-warning ps-3">
                <h6 className="fw-bold mb-1">Web Developer Intern</h6>
                <p className="mb-1 text-secondary">Depi Program — 2024</p>
                <small className="text-muted">
                  Worked on full-stack projects using Node.js and Express.
                </small>
              </div>
            </div>
          </div>

          <div className="education col-12 col-md-6 col-lg-4 text-center">
            <h5 className="mb-3">Education</h5>
            <div className="py-2 px-3 rounded shadow-lg d-flex flex-column justify-content-center bg-light mb-4">
              <div className="education-item text-start border-start border-4 border-warning ps-3">
                <h6 className="fw-bold mb-1">Bachelor's in Computer Science</h6>
                <p className="mb-1 text-secondary">EGYPT - O6U</p>
                <small className="text-muted">2016 - 2020</small>
              </div>
            </div>

            <h5 className="mb-3">Status</h5>
            <div className="py-3 px-3 rounded shadow-lg bg-light">
              <p className="fw-bold mb-1">Current Status:</p>
              <p className="text-warning mb-2">
                Actively Looking for Opportunities
              </p>
              <small className="text-muted">
                Open to frontend and full-stack web development roles.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
