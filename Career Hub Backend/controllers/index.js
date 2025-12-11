const authController = require("./auth");
const profileStepsController = require("./User/userProfile");
const userProfileController = require("./User/user");
const experienceAndEducation = require("./User/experienceAndEducation");

const applicationController = require("./Company/applicantController");
const companyProfileController = require("./Company/compnayProfile");
const jobController = require("./Company/jobController");

const jobSearchController = require("./User/jobSearches");

module.exports = {
  authController,
  profileStepsController,
  userProfileController,
  experienceAndEducation,
  applicationController,
  companyProfileController,
  jobController,
  jobSearchController
};
