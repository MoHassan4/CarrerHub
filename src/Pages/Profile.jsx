import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../css/ProfileStyle.css";
import ExperienceProfile from "../Components/Profile/ExperienceProfile";
import EducationProfile from "../Components/Profile/EducationProfile";
import { useEffect, useState } from "react";
import ProfileModal from "../Components/Profile/ProfileModal";
import SkillsProfile from "../Components/Profile/SkillsProfile";
import SkillsProfileModal from "../Components/Profile/SkillsProfileModal";
import BasicInfosProfileModal from "../Components/Profile/BasicInfosProfileModal";
import {
  // fetchAppliedJobs,
  getUsers,
} from "../services/Users.Get_Update_Profile.service";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const handleShow = (type) => {
    setModalType(type);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  const [showSkillModal, setShowSkillModal] = useState(false);
  const handleSkillShow = () => {
    setShowSkillModal(true);
  };
  const handleSkillModalClose = () => setShowSkillModal(false);

  const [showBasicInfosModal, setShowBasicInfosModal] = useState(false);
  const handleBasicInfos = () => {
    setShowBasicInfosModal(true);
  };
  const handleBasicInfosClose = () => setShowBasicInfosModal(false);

  const [userData, setUserData] = useState(null);
  // const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUsers();
        setUserData(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    // const getJobs = async () => {
    //   const jobs = await fetchAppliedJobs();
    //   setAppliedJobs(jobs);
    // };

    fetchUser();
    // getJobs();
  }, []);

  return (
    <div className="profile container">
      {/* Profile Header */}
      <div className="p-3 rounded shadow-lg d-flex flex-column justify-content-center align-items-center bg-light mb-4">
        <div className="d-flex align-self-start w-100 justify-content-between">
          <button
            onClick={handleBasicInfos}
            className="orange mt-1 fs-5 fw-bold border-0 bg-transparent"
          >
            Edit
          </button>
          <Link
            to="/applied-jobs"
            className="orange mt-1 fs-5 fw-bold border-0 text-decoration-none d-none d-lg-block"
          >
            Jobs You Applied For{" "}
            <FontAwesomeIcon className="right-arrow" icon={faArrowRight} />
          </Link>
          <Link
            to="/applied-jobs"
            className="orange mt-1 fs-5 fw-bold border-0 text-decoration-none d-lg-none"
          >
            Your Jobs
          </Link>
        </div>
        <FontAwesomeIcon icon={faUserCircle} size="4x" className="orange" />
        <h4 className="mt-3">
          {userData?.user?.firstName} {userData?.user?.lastName}
        </h4>
        <p className="text-secondary">Job Seeker</p>
      </div>

      <div className="d-flex flex-column gap-4">
        {/* Basic Info */}
        <div className="card p-3 shadow-lg w-100">
          <h5>Your Informations</h5>
          <div className="basic-info email">
            <p>Email</p>
            <p className="orange-bg">{userData?.user?.email}</p>
          </div>
          <hr />
          <div className="basic-info phone">
            <p>Phone</p>
            <p className="orange-bg">
              {userData?.user?.phoneNumber || "No phone"}
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="card p-3 shadow-lg w-100">
          <h5>Experience</h5>
          {userData?.experiences && userData.experiences.length > 0 ? (
            userData.experiences.map((exp, index) => (
              <ExperienceProfile
                key={index}
                title={exp.jobTitle}
                present={`${exp.companyName} — ${new Date(
                  exp.startDate
                ).getFullYear()}–${new Date(exp.endDate).getFullYear()}`}
                details={exp.description}
              />
            ))
          ) : (
            <p className="text-secondary">No experience added yet</p>
          )}
          <hr />
          <button
            className="btn orange-bg fw-bold"
            onClick={() => handleShow("experience")}
          >
            Add Experience
          </button>
        </div>

        {/* Education */}
        <div className="card p-3 shadow-lg w-100">
          <h5>Education</h5>
          {userData?.educations && userData.educations.length > 0 ? (
            userData.educations.map((edu, index) => (
              <EducationProfile
                key={index}
                degree={edu.degree}
                university={`${edu.eduCountry} - ${edu.university}`}
                duration={`${new Date(
                  edu.startDate
                ).getFullYear()} - ${new Date(edu.endDate).getFullYear()}`}
              />
            ))
          ) : (
            <p className="text-secondary">No education added yet</p>
          )}
          <hr />
          <button
            className="btn orange-bg fw-bold"
            onClick={() => handleShow("education")}
          >
            Add Education
          </button>
        </div>

        {/* Skills */}
        <div className="card p-3 shadow-lg w-100">
          <h5>Skills</h5>
          {userData?.profile?.skills && userData.profile.skills.length > 0 ? (
            userData.profile.skills.map((skill, index) => (
              <SkillsProfile key={index} skill={skill} />
            ))
          ) : (
            <p className="text-secondary">No skills added yet</p>
          )}
          <hr />
          <button
            className="btn orange-bg fw-bold w-100"
            onClick={handleSkillShow}
          >
            Add Skill
          </button>
        </div>

        {/* Applied Jobs */}
        {/* <div className="card p-3 shadow-lg w-100">
          <h5>Jobs You Applied For</h5>
          <div
            className="d-flex flex-column gap-2"
            style={{ maxHeight: "180px", overflowY: "auto" }}
          >
            {appliedJobs?.length > 0 ? (
              appliedJobs.map((job) => (
                <div
                  key={job._id}
                  className="p-2 border rounded bg-white d-flex flex-column align-items-start"
                >
                  <h6 className="mb-1">{job.jobId?.jobTitle}</h6>
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
                      : job.status === "accepted"
                      ? "Accepted"
                      : "Unknown"}
                  </small>
                </div>
              ))
            ) : (
              <p className="text-secondary">
                You haven’t applied to any jobs yet
              </p>
            )}
          </div>
        </div> */}
      </div>

      {/* Modals */}
      <ProfileModal
        show={showModal}
        handleClose={handleClose}
        type={modalType}
      />
      <SkillsProfileModal
        show={showSkillModal}
        handleClose={handleSkillModalClose}
      />
      <BasicInfosProfileModal
        show={showBasicInfosModal}
        handleClose={handleBasicInfosClose}
      />
    </div>
  );
}

export default Profile;
