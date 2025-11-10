import { useState } from "react";
import experienceImg from "../../assets/experiencePage.jpg";
import { setExperienceDB } from "../../services/Users.Login_SignUp.service";

function ExperienceForm({ back, next, userID }) {
  const [experience, setExperience] = useState({
    userId: userID,
    jobTitle: "",
    companyName: "",
    jobLocation: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setExperience((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { jobTitle, companyName, jobLocation, startDate } = experience;

    if (!jobTitle || !companyName || !jobLocation || !startDate) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setError(""); 
      await setExperienceDB(experience); 
      next(experience); 
    } catch (err) {
      console.error(err);
      setError("Failed to save experience. Please try again.");
    }
  };

  return (
    <div className="container">
      <form className="form-control p-4" onSubmit={handleSubmit}>
        <h3>Experience</h3>
        <p>Provide your work experience.</p>
        <hr />

        <div className="img-container w-100 d-flex justify-content-center">
          <img
            src={experienceImg}
            alt="experience"
            className="img-fluid w-50"
          />
        </div>

        <div className="d-flex flex-column gap-3 mt-3">
          <input
            type="text"
            id="jobTitle"
            className="form-control"
            placeholder="Job Title *"
            value={experience.jobTitle}
            onChange={handleChange}
          />
          <input
            type="text"
            id="companyName"
            className="form-control"
            placeholder="Company Name *"
            value={experience.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            id="jobLocation"
            className="form-control"
            placeholder="Job Location *"
            value={experience.jobLocation}
            onChange={handleChange}
          />
          <input
            type="month"
            id="startDate"
            className="form-control"
            value={experience.startDate}
            onChange={handleChange}
          />
          <input
            type="month"
            id="endDate"
            className="form-control"
            value={experience.endDate}
            onChange={handleChange}
          />
          <textarea
            id="description"
            className="form-control"
            rows="3"
            placeholder="Description"
            value={experience.description}
            onChange={handleChange}
          />
          {error && <p className="text-danger fw-medium">{error}</p>}
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button type="button" className="back-btn btn" onClick={back}>
            Back
          </button>
          <button type="submit" className="ca-form-btn btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExperienceForm;
