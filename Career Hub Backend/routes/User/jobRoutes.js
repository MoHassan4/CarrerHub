const express = require("express");
const isAuth = require("../../middlewares/isAuth");
const { jobSearchController } = require("../../controllers");

const router = express.Router();

router.get("/job-search",isAuth,jobSearchController.jobSearch);
router.get("/title/:jobTitle",isAuth,jobSearchController.getJobsByTitle);
router.get("/locations/stats",isAuth,jobSearchController.getJobsCountByCountry);
router.get("/location/:country",isAuth,jobSearchController.getJobsByLocation);
router.post("/jobs/:jobId/apply",isAuth,jobSearchController.applyToJob);
router.get("/applied-jobs",isAuth,jobSearchController.getUserAppliedJobs);

module.exports = router;