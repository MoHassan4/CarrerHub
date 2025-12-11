const { body, param } = require("express-validator");

const addJobValidator = [
  body("jobLocation")
    .notEmpty()
    .withMessage("Job location is required")
    .isString()
    .trim(),

  body("jobTitle")
    .notEmpty()
    .withMessage("Job title is required")
    .isString()
    .trim(),

  body("jobDescription")
    .notEmpty()
    .withMessage("Job description is required")
    .isLength({ min: 20 })
    .withMessage("Description must be at least 20 characters long"),

  body("jobType")
    .notEmpty()
    .withMessage("Job type is required")
    .isIn(["full-time", "part-time", "remote", "internship", "contract"])
    .withMessage("Invalid job type"),

  body("jobMinPay")
    .notEmpty()
    .withMessage("Minimum pay is required")
    .isNumeric()
    .withMessage("Minimum pay must be a number"),

  body("jobMaxPay")
    .notEmpty()
    .withMessage("Maximum pay is required")
    .isNumeric()
    .custom((value, { req }) => {
      if (value < req.body.jobMinPay) {
        throw new Error("Maximum pay must be greater than minimum pay");
      }
      return true;
    }),

  body("jobRate")
    .notEmpty()
    .withMessage("Rate is required")
    .isIn(["hourly", "monthly", "yearly"])
    .withMessage("Rate must be hourly, monthly, or yearly"),
];

const deleteJobValidator = [
  param("jobId").isMongoId().withMessage("Invalid job ID format"),
];

const updateApplicantStatusValidator = [
  param("jobId").isMongoId().withMessage("Invalid job ID"),
  param("userId").isMongoId().withMessage("Invalid user ID"),
  body("status")
    .notEmpty()
    .withMessage("Status is required")
    .isIn(["accepted", "rejected"])
    .withMessage("Status must be 'accepted' or 'rejected'"),
];

module.exports = {
  addJobValidator,
  deleteJobValidator,
  updateApplicantStatusValidator,
};
