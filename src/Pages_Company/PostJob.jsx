import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Components/shared/Header";

function PostJob() {
  return (
    <div className="post-job-container d-flex flex-column justify-content-center w-50 mx-auto py-5">
      <div className="header text-center mb-4">
        <Header
          h1="Add Job"
          inSpan="Basics"
          p="Fill in the job details below"
        />
      </div>

      <Form>
        {/* Job Location */}
        <Form.Group className="mb-3">
          <Form.Label>Job Location</Form.Label>
          <Form.Select>
            <option>Egypt</option>
            <option>Oman</option>
            <option>Iraq</option>
            <option>Syria</option>
          </Form.Select>
        </Form.Group>

        {/* Job Title */}
        <Form.Group className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Enter job title" />
        </Form.Group>

        {/* Job Description */}
        <Form.Group className="mb-3">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Describe the role and responsibilities"
          />
        </Form.Group>

        {/* Job Type */}
        <Form.Group className="mb-3">
          <Form.Label>Job Type</Form.Label>
          <Form.Select>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Permanent</option>
            <option>Temporary</option>
            <option>Contract</option>
            <option>Internship</option>
            <option>New Grad</option>
          </Form.Select>
        </Form.Group>

        <hr className="my-4" />

        {/* Pay Section */}
        <div className="pay-section mb-4">
          <h5 className="fw-bold mb-3">Pay</h5>
          <p className="text-muted">
            Review the pay we estimated for your job and adjust as needed. Check
            your local minimum wage.
          </p>

          <Form.Label className="fw-semibold">Show pay by</Form.Label>
          <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-3">
            <div className="d-flex align-items-center gap-2 w-100">
              <Form.Label className="mb-0">Minimum</Form.Label>
              <Form.Control type="number" placeholder="E£" />
            </div>
            <span className="fw-bold">to</span>
            <div className="d-flex align-items-center gap-2 w-100">
              <Form.Label className="mb-0">Maximum</Form.Label>
              <Form.Control type="number" placeholder="E£" />
            </div>
          </div>

          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Select>
              <option>Per Month</option>
              <option>Per Week</option>
              <option>Per Day</option>
              <option>Per Hour</option>
            </Form.Select>
          </Form.Group>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-5">
          <Button variant="primary" type="submit" className="px-4">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PostJob;
