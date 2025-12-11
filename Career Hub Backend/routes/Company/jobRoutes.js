const express = require("express");
const { jobController, applicationController } = require("../../controllers");
const isAuth = require("../../middlewares/isAuth");
const { addJobValidator, deleteJobValidator, updateApplicantStatusValidator } = require("../../validators/Company/jobValidators");
const validate = require("../../validators/validate");

const router = express.Router();

router.get("/jobs",isAuth,jobController.getCompanyJobs);
router.post("/jobs",isAuth,addJobValidator,validate,jobController.addJob);
router.delete("/jobs/:jobId",isAuth,deleteJobValidator,validate,jobController.deleteJob);
router.get("/jobs/:jobId/applicants",isAuth,applicationController.viewApplicants);
router.get("/jobs/:jobId/applicants/:userId/profile",isAuth,applicationController.viewApplicantProfile);
router.put("/jobs/:jobId/applicants/:userId/status",isAuth,updateApplicantStatusValidator,validate,applicationController.updateApplicantStatus);

module.exports = router;