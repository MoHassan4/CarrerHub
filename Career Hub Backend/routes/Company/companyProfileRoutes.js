const express = require("express");
const isAuth = require("../../middlewares/isAuth");
const { companyProfileController } = require("../../controllers");
const { updateCompanyProfileValidator } = require("../../validators/Company/profileValidator");
const validate = require("../../validators/validate");
const router = express.Router();

router.post("/profile", isAuth, companyProfileController.createCompanyProfile);
router.get("/profile",isAuth,companyProfileController.getCompanyProfile);
router.put("/profile",isAuth,updateCompanyProfileValidator,validate,companyProfileController.updateCompanyProfile);

module.exports = router;