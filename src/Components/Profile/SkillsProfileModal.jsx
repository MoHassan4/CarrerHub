import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function SkillsProfileModal({ show, handleClose }) {
  const [skillData, setSkillData] = useState({
    skill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillData({ [name]: value });
  };

  const handleSubmit = () => {
    console.log(skillData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Skill</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Skill</Form.Label>
          <Form.Control
            name="skill"
            onChange={handleChange}
            placeholder="e.g. React.js, Editing, Python..."
          />
        </Form.Group>
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

export default SkillsProfileModal;
