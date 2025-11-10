import { useState } from "react";
import { setStep5 } from "../../services/Users.Login_SignUp.service";

function SkillsForm({ next, back, userID }) {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [error, setError] = useState("");

  const availableSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "Flask",
    "SQL",
    "MongoDB",
    "Git",
    "Figma",
    "TypeScript",
    "Vue.js",
    "Angular",
    "Java",
    "C#",
    "C++",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setError("");

    if (value.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }

    const filtered = availableSkills.filter(
      (skill) =>
        skill.toLowerCase().includes(value.toLowerCase()) &&
        !skills.includes(skill)
    );
    setFilteredSuggestions(filtered);
  };

  const addSkillFromSuggestion = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setInputValue("");
    setFilteredSuggestions([]);
  };

  const handleSuggestionClick = (skill) => {
    addSkillFromSuggestion(skill);
  };

  const removeSkill = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setError(
        "Please select or clear the skill you are currently typing before proceeding."
      );
      return;
    }

    if (skills.length === 0) {
      setError(
        "Please add at least one skill by selecting it from the suggestions."
      );
      return;
    }

    setError("");

    try {
      // Send skills to backend (Step 5)
      const response = await setStep5({
        userId: userID,
        skills: skills,
      });

      console.log("Step 5 response:", response);

      // Proceed to finish account if successful
      next(skills);
    } catch (err) {
      console.error(
        "Error in step 5:",
        err.response?.data || err.message || err
      );
      setError("Failed to save your skills. Please try again.");
    }
  };

  return (
    <div className="container">
      <form className="form-control p-4" onSubmit={handleSubmit}>
        <h3>Skills</h3>
        <p>
          Show off your abilities by selecting your skills from the official
          list
        </p>
        <hr />

        <div className="form-body d-flex flex-column gap-3 pb-5">
          <div className="skills-input d-flex flex-column">
            <label htmlFor="skills" className="form-label">
              Select your skills *
            </label>

            <div className="skill-input-container position-relative border rounded p-2 bg-white">
              <div className="d-flex flex-wrap gap-2 mb-1">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="user-skill badge d-flex align-items-center px-3 py-2"
                    style={{ borderRadius: "20px" }}
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="btn-close btn-close-white ms-2"
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        fontSize: "0.7rem",
                      }}
                    ></button>
                  </span>
                ))}
              </div>

              <input
                type="text"
                id="skills"
                className="form-control border-0 shadow-none"
                placeholder="Type to filter and select skills..."
                value={inputValue}
                onChange={handleInputChange}
                autoComplete="off"
              />

              {filteredSuggestions.length > 0 && (
                <ul
                  className="list-group position-absolute w-100"
                  style={{
                    top: "100%",
                    left: 0,
                    zIndex: 10,
                    maxHeight: "160px",
                    overflowY: "auto",
                  }}
                >
                  {filteredSuggestions.map((skill) => (
                    <li
                      key={skill}
                      className="list-group-item list-group-item-action"
                      onClick={() => handleSuggestionClick(skill)}
                      style={{ cursor: "pointer" }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {error && <p className="text-danger">{error}</p>}
        </div>

        <div className="form-btns d-flex justify-content-between">
          <button
            type="button"
            className="back-btn btn btn-outline-primary py-2 px-3 w-25"
            onClick={back}
          >
            Back
          </button>
          <button
            type="submit"
            className="ca-form-btn btn btn-primary py-2 px-3 w-25"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SkillsForm;
