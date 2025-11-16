import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../../css/ProfileStyle.css";
import ExperienceProfile from "../Profile/ExperienceProfile";
import EducationProfile from "../Profile/EducationProfile";
import SkillsProfile from "../Profile/SkillsProfile";
import { useEffect, useState } from "react";
import getApplicantProfile from "../../services/GetApplicantProfile.service";
import handleApplicantStatus from "../../services/HandleStatus.service";

function ApplicantProfile({ jobId, applicantId, onBack }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      if (!jobId || !applicantId) {
        console.error("Missing jobId or applicantId");
        return;
      }

      try {
        const res = await getApplicantProfile(jobId, applicantId);
        setData(res.data); // API returns { user, profile, educations, experiences }
      } catch (err) {
        console.error("Error fetching applicant profile:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [jobId, applicantId]);

  const handleStatusChange = async (newStatus) => {
    if (!jobId || !applicantId) return;

    setStatusUpdating(true);
    setStatusMessage("");
    try {
      // This sends { status: 'accepted' } in the request body
      await handleApplicantStatus(jobId, applicantId, newStatus);
      setStatusMessage(`Applicant ${newStatus}`);
    } catch (err) {
      console.error("Error updating status:", err.response || err);
      setStatusMessage(
        err.response?.data?.message || "Failed to update status"
      );
    } finally {
      setStatusUpdating(false);
    }
  };

  if (loading) return <p>Loading applicant profile...</p>;
  if (!data) return <p>Profile not found.</p>;

  const { user, profile, experiences, educations } = data;

  return (
    <div className="profile container">
      {/* Back Button */}
      <button className="btn btn-secondary mb-4" onClick={onBack}>
        ← Back to Applicants
      </button>

      {/* Profile Header */}
      <div className="p-3 rounded shadow-lg d-flex flex-column justify-content-center align-items-center bg-light mb-4">
        <FontAwesomeIcon icon={faUserCircle} size="4x" className="orange" />
        <h4 className="mt-3">
          {user.firstName} {user.lastName}
        </h4>
        <p className="text-secondary">Applicant</p>

        {/* Accept / Reject Buttons */}
        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-success"
            onClick={() => handleStatusChange("accepted")}
            disabled={statusUpdating}
          >
            Accept
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleStatusChange("rejected")}
            disabled={statusUpdating}
          >
            Reject
          </button>
        </div>
        {statusMessage && <p className="mt-2 text-info">{statusMessage}</p>}
      </div>

      <div className="d-flex flex-column gap-4">
        {/* Basic Info */}
        <div className="card p-3 shadow-lg w-100">
          <h5>Basic Information</h5>

          <div className="basic-info email">
            <p>Email</p>
            <p className="orange-bg">{user.email}</p>
          </div>

          <hr />

          <div className="basic-info phone">
            <p>Phone</p>
            <p className="orange-bg">{user.phoneNumber || "Not provided"}</p>
          </div>

          <hr />

          <div className="basic-info phone">
            <p>Gender</p>
            <p className="orange-bg">{profile.gender || "Not provided"}</p>
          </div>

          <hr />

          <div className="basic-info phone">
            <p>Country</p>
            <p className="orange-bg">{profile.country || "Not provided"}</p>
          </div>

          <hr />

          <div className="basic-info phone">
            <p>Nationality</p>
            <p className="orange-bg">{profile.nationality || "Not provided"}</p>
          </div>
        </div>

        {/* Experience */}
        <div className="card p-3 shadow-lg w-100">
          <h5>Experience</h5>
          {experiences?.length > 0 ? (
            experiences.map((exp, index) => (
              <ExperienceProfile
                key={index}
                title={exp.jobTitle}
                present={`${exp.companyName} — 
                  ${new Date(exp.startDate).getFullYear()}–
                  ${new Date(exp.endDate).getFullYear()}`}
                details={exp.description}
              />
            ))
          ) : (
            <p className="text-secondary">No experience listed</p>
          )}
        </div>

        {/* Education */}
        <div className="card p-3 shadow-lg w-100">
          <h5>Education</h5>
          {educations?.length > 0 ? (
            educations.map((edu, index) => (
              <EducationProfile
                key={index}
                degree={edu.degree}
                university={`${edu.eduCountry} — ${edu.university}`}
                duration={`${new Date(
                  edu.startDate
                ).getFullYear()} - ${new Date(edu.endDate).getFullYear()}`}
              />
            ))
          ) : (
            <p className="text-secondary">No education provided</p>
          )}
        </div>

        {/* Skills */}
        <div className="card p-3 shadow-lg w-100">
          <h5>Skills</h5>
          {profile?.skills?.length > 0 ? (
            profile.skills.map((skill, index) => (
              <SkillsProfile key={index} skill={skill} />
            ))
          ) : (
            <p className="text-secondary">No skills listed</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApplicantProfile;
