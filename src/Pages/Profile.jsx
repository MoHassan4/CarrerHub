import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../css/ProfileStyle.css";
import ExperienceProfile from "../Components/Profile/ExperienceProfile";
import EducationProfile from "../Components/Profile/EducationProfile";
import { useState } from "react";
import ProfileModal from "../Components/Profile/ProfileModal";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleShow = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleSave = (data) => {
    console.log("Saved data:", data);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="profile container">
      <div className="">
        <div className="p-3 rounded shadow-lg d-flex flex-column justify-content-center align-items-center bg-light">
          <p className="text-warning align-self-start mt-1 fs-5 fw-bold">
            Edit
          </p>
          <FontAwesomeIcon
            icon={faUserCircle}
            size="4x"
            className="text-warning"
          />
          <h4 className="mt-3">Amr Mousa</h4>
          <p className="text-secondary">Job Seeker</p>
        </div>

        <div className="row pt-5 gap-5 gap-lg-0 justify-content-center">
          {/* Basic Info Section */}
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

          {/* Experience Section */}
          <div className="experience col-12 col-md-6 col-lg-4 text-center">
            <h5 className="mb-3">Experience</h5>
            <div className="p-3 rounded shadow-lg bg-light d-flex flex-column gap-3">
              <ExperienceProfile
                title="Frontend Developer"
                present="Freelance — 2023–Present"
                details="Building responsive websites using React.js and Bootstrap."
              />
              <ExperienceProfile
                title="Web Developer Intern"
                present="Depi Program — 2024"
                details="Worked on full-stack projects using Node.js and Express."
              />
              <hr />
              <button
                className="btn btn-warning fw-bold"
                onClick={() => handleShow("experience")}
              >
                Add Experience
              </button>
            </div>
          </div>

          {/* Education Section */}
          <div className="education col-12 col-md-6 col-lg-4 text-center">
            <h5 className="mb-3">Education</h5>
            <div className="py-2 px-3 rounded shadow-lg d-flex flex-column justify-content-center bg-light mb-4">
              <EducationProfile
                degree="Bachelor's in Computer Science"
                university="EGYPT - O6U"
                duration="2016 - 2020"
              />
              <hr />
              <button
                className="btn btn-warning fw-bold"
                onClick={() => handleShow("education")}
              >
                Add Education
              </button>{" "}
            </div>
            <ProfileModal
              show={showModal}
              handleClose={handleClose}
              type={modalType}
            />

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
