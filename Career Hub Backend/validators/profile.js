const { check,body } = require("express-validator");

const step1Validator = [
  check("targetJobTitle")
    .trim()
    .notEmpty()
    .withMessage("Target job title is required"),
  check("targetJobLevel")
    .trim()
    .notEmpty()
    .withMessage("Target job level is required"),
  check("targetJobLocation")
    .trim()
    .notEmpty()
    .withMessage("Target job location is required"),
];

const step2Validator = [
  check("birthDate")
    .notEmpty()
    .withMessage("Birthdate is required")
    .isISO8601()
    .withMessage("Invalid date format"),
  check("country")
    .trim()
    .notEmpty()
    .withMessage("Residence country is required"),
  check("nationality")
    .trim()
    .notEmpty()
    .withMessage("Nationality is required"),
  check("gender")
    .trim()
    .isIn(["male", "female", "other"])
    .withMessage("Gender must be male, female, or other"),
];

const experienceValidator = [
  check("companyName")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),
  check("jobTitle").trim().notEmpty().withMessage("Job title is required"),
  check("jobLocation")
    .trim()
    .notEmpty()
    .withMessage("Job location is required"),
  check("startDate")
    .notEmpty()
    .withMessage("Start date is required")
    .isISO8601()
    .withMessage("Invalid start date"),
  check("endDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid end date"),
];

const educationValidator = [
  check("university")
    .trim()
    .notEmpty()
    .withMessage("University/School is required"),
  check("fieldOfStudy")
    .trim()
    .notEmpty()
    .withMessage("Field of study is required"),
  check("degree").trim().notEmpty().withMessage("Degree is required"),
  check("eduCountry")
    .trim()
    .notEmpty()
    .withMessage("Education country is required"),
  check("startDate")
    .notEmpty()
    .withMessage("Start date is required")
    .isISO8601()
    .withMessage("Invalid start date format"),
  check("endDate")
    .notEmpty()
    .withMessage("End date is required")
    .isISO8601()
    .withMessage("Invalid end date format"),
];

const profileUpdateValidator = [
  check("firstName").optional().trim().notEmpty().withMessage("First name cannot be empty"),
  check("lastName").optional().trim().notEmpty().withMessage("Last name cannot be empty"),
  check("email").optional().isEmail().withMessage("Invalid email address"),
  check("phoneNumber")
    .optional()
    .isMobilePhone("any")
    .withMessage("Invalid phone number"),
];

const skillsStepValidator = [
  body("skills")
    .isArray({ min: 1 })
    .withMessage("Skills must be an array and contain at least one skill"),
     body("skills.*")
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage("Each skill must be at least 2 characters long"),
];

const addSkillValidator = [
  body("skill")
    .notEmpty()
    .withMessage("Skill is required")
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage("Skill must be at least 2 characters long"),
];



module.exports = {step1Validator,step2Validator,experienceValidator,educationValidator,profileUpdateValidator,skillsStepValidator,addSkillValidator}