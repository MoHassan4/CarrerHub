const { body } = require("express-validator");

const updateCompanyProfileValidator = [
  body("companyIndustry")
    .optional()
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage("Company industry must be at least 2 characters long"),

  body("foundedYear")
    .optional()
    .isInt({ min: 1800, max: new Date().getFullYear() })
    .withMessage("Founded year must be a valid year"),

  body("companyDescription")
    .optional()
    .isString()
    .trim()
    .isLength({ min: 20 })
    .withMessage("Description must be at least 20 characters long"),

  body("companyCountry")
    .optional()
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage("Country name must be valid"),

];

module.exports = { updateCompanyProfileValidator };
