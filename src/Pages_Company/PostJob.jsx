import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Components/shared/Header";
import setJobData from "../services/AddJobs.service";
import Swal from "sweetalert2";

function PostJob() {
  const [formData, setFormData] = useState({
    jobLocation: "",
    jobTitle: "",
    jobDescription: "",
    jobType: "",
    jobMinPay: "",
    jobMaxPay: "",
    jobRate: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!formData.jobLocation)
      newErrors.jobLocation = "Job location is required.";

    if (!formData.jobTitle.trim())
      newErrors.jobTitle = "Job title is required.";

    if (!formData.jobDescription.trim())
      newErrors.jobDescription = "Job description is required.";

    if (!formData.jobType) newErrors.jobType = "Job type is required.";

    const min = Number(formData.jobMinPay);
    const max = Number(formData.jobMaxPay);

    if (!formData.jobMinPay) {
      newErrors.jobMinPay = "Minimum pay is required.";
    } else if (min < 0) {
      newErrors.jobMinPay = "Minimum pay must be positive.";
    }

    if (!formData.jobMaxPay) {
      newErrors.jobMaxPay = "Maximum pay is required.";
    } else if (max < min) {
      newErrors.jobMaxPay = "Max pay must be greater than minimum pay.";
    }

    if (!formData.jobRate) newErrors.jobRate = "Pay rate is required.";

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const payload = {
        ...formData,
        jobMinPay: Number(formData.jobMinPay),
        jobMaxPay: Number(formData.jobMaxPay),
      };

      
      
      const res = await setJobData(payload);
      if (res.status) {
        Swal.fire({
          icon: "success",
          title: "Job Posted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          jobLocation: "",
          jobTitle: "",
          jobDescription: "",
          jobType: "",
          jobMinPay: "",
          jobMaxPay: "",
          jobRate: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error Posting Job",
          text: res.message || "Please try again later.",
        });
      }
    }
  }

  return (
    <div className="post-job-container d-flex flex-column justify-content-center w-50 mx-auto py-5">
      <div className="header text-center mb-4">
        <Header
          h1="Add Job"
          inSpan="Basics"
          p="Fill in the job details below"
        />
      </div>

      <Form onSubmit={handleSubmit}>
        {/* Job Location */}
        <Form.Group className="mb-3">
          <Form.Label>Job Location</Form.Label>
          <Form.Select
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="Algeria">Algeria</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Comoros">Comoros</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Egypt">Egypt</option>
            <option value="Iraq">Iraq</option>
            <option value="Jordan">Jordan</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Libya">Libya</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Morocco">Morocco</option>
            <option value="Oman">Oman</option>
            <option value="Palestine">Palestine</option>
            <option value="Qatar">Qatar</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Somalia">Somalia</option>
            <option value="Sudan">Sudan</option>
            <option value="Syria">Syria</option>
            <option value="Tunisia">Tunisia</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Yemen">Yemen</option>
          </Form.Select>
          {errors.jobLocation && (
            <p className="text-danger">{errors.jobLocation}</p>
          )}
        </Form.Group>

        {/* Job Title */}
        <Form.Group className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            name="jobTitle"
            placeholder="Enter job title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          {errors.jobTitle && <p className="text-danger">{errors.jobTitle}</p>}
        </Form.Group>

        {/* Job Description */}
        <Form.Group className="mb-3">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="jobDescription"
            placeholder="Describe the role and responsibilities"
            value={formData.jobDescription}
            onChange={handleChange}
          />
          {errors.jobDescription && (
            <p className="text-danger">{errors.jobDescription}</p>
          )}
        </Form.Group>

        {/* Job Type */}
        <Form.Group className="mb-3">
          <Form.Label>Job Type</Form.Label>
          <Form.Select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Select Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="remote">Remote</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </Form.Select>
          {errors.jobType && <p className="text-danger">{errors.jobType}</p>}
        </Form.Group>

        <hr className="my-4" />

        {/* Pay Section */}
        <div className="pay-section mb-4">
          <h5 className="fw-bold mb-3">Pay</h5>

          <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-3">
            <div className="d-flex align-items-center gap-2 w-100">
              <Form.Label className="mb-0">Minimum</Form.Label>
              <Form.Control
                type="number"
                name="jobMinPay"
                placeholder="E£"
                value={formData.jobMinPay}
                onChange={handleChange}
              />
            </div>

            <span className="fw-bold">to</span>

            <div className="d-flex align-items-center gap-2 w-100">
              <Form.Label className="mb-0">Maximum</Form.Label>
              <Form.Control
                type="number"
                name="jobMaxPay"
                placeholder="E£"
                value={formData.jobMaxPay}
                onChange={handleChange}
              />
            </div>
          </div>

          {errors.jobMinPay && (
            <p className="text-danger">{errors.jobMinPay}</p>
          )}
          {errors.jobMaxPay && (
            <p className="text-danger">{errors.jobMaxPay}</p>
          )}

          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Select
              name="jobRate"
              value={formData.jobRate}
              onChange={handleChange}
            >
              <option value="">Select Rate</option>
              <option value="hourly">Per Hour</option>
              <option value="monthly">Per Month</option>
              <option value="yearly">Per Year</option>
            </Form.Select>
            {errors.jobRate && <p className="text-danger">{errors.jobRate}</p>}
          </Form.Group>
        </div>

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
