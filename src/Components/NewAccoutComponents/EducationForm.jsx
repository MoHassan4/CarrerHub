import { useState } from "react";
import { setEducationDB } from "../../services/Users.Login_SignUp.service";

function EducationForm({ back, next, userID }) {
  const [education, setEducation] = useState({
    userId: userID,
    university: "",
    fieldOfStudy: "",
    degree: "",
    eduCountry: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEducation((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { university, degree, startDate } = education;

    if (!university || !degree || !startDate) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      await setEducationDB(education);
      setError("");
      next();
    } catch (err) {
      setError("Failed to save education. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <form className="form-control p-4" onSubmit={handleSubmit}>
        <h3>Education</h3>
        <p>Provide your academic background.</p>
        <hr />

        <div className="d-flex flex-column gap-3 mt-3">
          <input
            type="text"
            id="university"
            className="form-control"
            placeholder="University *"
            value={education.university}
            onChange={handleChange}
          />
          <input
            type="text"
            id="fieldOfStudy"
            className="form-control"
            placeholder="Field of Study"
            value={education.fieldOfStudy}
            onChange={handleChange}
          />
          <input
            type="text"
            id="degree"
            className="form-control"
            placeholder="Degree *"
            value={education.degree}
            onChange={handleChange}
          />
          <input
            type="text"
            id="eduCountry"
            className="form-control"
            placeholder="Country"
            value={education.eduCountry}
            onChange={handleChange}
          />
          <input
            type="month"
            id="startDate"
            className="form-control"
            value={education.startDate}
            onChange={handleChange}
          />
          <input
            type="month"
            id="endDate"
            className="form-control"
            value={education.endDate}
            onChange={handleChange}
          />
          <textarea
            id="description"
            className="form-control"
            rows="3"
            placeholder="Description"
            value={education.description}
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

export default EducationForm;
