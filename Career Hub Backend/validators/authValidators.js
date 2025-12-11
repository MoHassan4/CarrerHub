const { check } = require("express-validator");

const userSignupValidator = [
  check("firstName").trim().notEmpty().withMessage("First name is required"),

  check("lastName").trim().notEmpty().withMessage("Last name is required"),

  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  check("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("any")
    .withMessage("Invalid phone number"),
];

const companySignupValidator = [
  check("companyName")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),

  check("companyRepresentative")
    .trim()
    .notEmpty()
    .withMessage("Company Representative Name is required"),

  check("email")
    .trim()
    .notEmpty()
    .withMessage("Company Email is required")
    .isEmail()
    .withMessage("Invalid email address"),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  check("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("any")
    .withMessage("Invalid phone number"),
];

const signinValidator = [
  check("email")
    .trim()
    .isEmail()
    .withMessage("Email is not valid")
    .notEmpty()
    .withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
];

const emailValidator = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid"),
];

const recoverPasswordValidator = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid"),
  check("code").trim().notEmpty().withMessage("Code is required"),
  check("oldPassword")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password Length Must be 6 chars at least"),
  check("newPassword")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password Length Must be 6 chars at least"),
];

module.exports = {
  userSignupValidator,
  companySignupValidator,
  signinValidator,
  emailValidator,
  recoverPasswordValidator,
};
