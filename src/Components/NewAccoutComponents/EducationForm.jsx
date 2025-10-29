import { useState } from "react";

function EducationForm({ back, createAccount }) {
  const [showModal, setShowModal] = useState(false);
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    field: "",
    start: "",
    end: "",
    desc: "",
  });
  const [allEducation, setAllEducation] = useState([]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEducation((prev) => ({ ...prev, [id]: value }));
  };

  const handleSaveEducation = () => {
    if (!education.school || !education.degree || !education.start) {
      alert("Please fill in all required fields.");
      return;
    }

    setAllEducation((prev) => [...prev, education]);
    setEducation({
      school: "",
      degree: "",
      field: "",
      start: "",
      end: "",
      desc: "",
    });
    console.log("Saved Education:", [...allEducation, education]);
    handleCloseModal();
  };

  return (
    <div className="container">
      <form className="form-control p-4" onSubmit={(e) => e.preventDefault()}>
        <h3>Education</h3>
        <p>Add your academic background.</p>
        <hr />

        <div className="edu-field d-flex flex-column flex-md-row justify-content-between gap-3 mt-3">
          <button
            type="button"
            className="back-btn btn py-2 px-3"
            onClick={back}
          >
            Back
          </button>

          <div className="edu-input d-flex flex-column flex-md-row gap-3">
            <button
              type="button"
              className="back-btn btn py-2 px-3"
              onClick={handleOpenModal}
            >
              Add Education
            </button>
            <button
              type="button"
              className="ca-form-btn btn py-2 px-3"
              onClick={() => createAccount(allEducation)}
            >
              Create Account
            </button>
          </div>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div
          className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1000 }}
        >
          <div
            className="modal-content bg-white p-4 rounded shadow"
            style={{ width: "90%", maxWidth: "500px" }}
          >
            <h4 className="mb-3">Add Education</h4>
            <form>
              <div className="d-flex flex-column gap-3">
                <input
                  type="text"
                  id="school"
                  className="form-control"
                  placeholder="School / University *"
                  value={education.school}
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
                  id="field"
                  className="form-control"
                  placeholder="Field of Study"
                  value={education.field}
                  onChange={handleChange}
                />
                <input
                  type="month"
                  id="start"
                  className="form-control"
                  value={education.start}
                  onChange={handleChange}
                />
                <input
                  type="month"
                  id="end"
                  className="form-control"
                  value={education.end}
                  onChange={handleChange}
                />
                <textarea
                  id="desc"
                  className="form-control"
                  rows="3"
                  placeholder="Description"
                  value={education.desc}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex justify-content-end gap-3 mt-4">
                <button
                  type="button"
                  className="back-btn btn"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="ca-form-btn btn"
                  onClick={handleSaveEducation}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationForm;
