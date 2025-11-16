import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { updateBasicInfos } from "../../services/Users.Get_Update_Profile.service";

function BasicInfosProfileModal({ show, handleClose }) {
  const [basicData, setBasicData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log(basicData);
    await updateBasicInfos(basicData);
    window.location.reload();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Your Informations</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            onChange={handleChange}
            placeholder=""
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            onChange={handleChange}
            placeholder=""
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" onChange={handleChange} placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control name="phoneNumber" onChange={handleChange} placeholder="" />
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

export default BasicInfosProfileModal;
