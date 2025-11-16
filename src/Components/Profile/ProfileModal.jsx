import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import {
  addNewEudcation,
  addNewExperience,
} from "../../services/Users.Get_Update_Profile.service";

function ProfileModal({ show, handleClose, type }) {
  const [experienceData, setExperienceData] = useState({
    jobTitle: "",
    companyName: "",
    jobLocation: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [educationData, setEducationData] = useState({
    university: "",
    fieldOfStudy: "",
    degree: "",
    eduCountry: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (type === "experience")
      setExperienceData({ ...experienceData, [name]: value });
    else setEducationData({ ...educationData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(type === "experience" ? experienceData : educationData);
    if (type === "experience") {
      // Call API to add experience
      await addNewExperience(experienceData);
      window.location.reload();
      handleClose();
    } else {
      // Call API to add education
      await addNewEudcation(educationData);
      window.location.reload();
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {type === "experience" ? "Add Experience" : "Add Education"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {type === "experience" ? (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="companyName"
                onChange={handleChange}
                placeholder="e.g. Google"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                name="jobTitle"
                onChange={handleChange}
                placeholder="Frontend Developer"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Location</Form.Label>
              <Form.Control
                name="jobLocation"
                onChange={handleChange}
                placeholder="Egypt"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration Start</Form.Label>
              <Form.Control
                type="month"
                name="startDate"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration End</Form.Label>
              <Form.Control
                type="month"
                name="endDate"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={handleChange}
                placeholder="Describe your role and achievements..."
              />
            </Form.Group>
          </>
        ) : (
          <>
            <Form.Group className="mb-3">
              <Form.Label>University</Form.Label>
              <Form.Control
                name="university"
                onChange={handleChange}
                placeholder="EGYPT - O6U"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Field of Study</Form.Label>
              <Form.Control
                name="fieldOfStudy"
                onChange={handleChange}
                placeholder="Computer Science"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                name="degree"
                onChange={handleChange}
                placeholder="Bachelor's in Computer Science"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Education Country</Form.Label>
              <Form.Control
                name="eduCountry"
                onChange={handleChange}
                placeholder="Bachelor's in Computer Science"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration Start</Form.Label>
              <Form.Control
                type="month"
                name="startDate"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration End</Form.Label>
              <Form.Control
                type="month"
                name="endDate"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={handleChange}
                placeholder="Optional description..."
              />
            </Form.Group>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="warning" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
