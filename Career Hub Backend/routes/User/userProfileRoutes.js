const express = require("express");
const router = express.Router();
const isAuth = require("../../middlewares/isAuth");
const {
  profileStepsController,
  experienceAndEducation,
  userProfileController,
} = require("../../controllers");
const upload = require("../../middlewares/uploadFile");
const {
  step1Validator,
  step2Validator,
  experienceValidator,
  educationValidator,
  skillsStepValidator,
  addSkillValidator,
  deleteSkillValidator,
} = require("../../validators/profile");
const validate = require("../../validators/validate");

router.post(
  "/step1",
  isAuth,
  step1Validator,
  validate,
  profileStepsController.completeStep1
);

router.post(
  "/step2",
  isAuth,
  upload.single("profilePic"),
  step2Validator,
  validate,
  profileStepsController.completeStep2
);

router.post(
  "/experience",
  isAuth,
  experienceValidator,
  validate,
  profileStepsController.completeStep3
);

router.post(
  "/education",
  isAuth,
  educationValidator,
  validate,
  profileStepsController.completeStep4
);

router.post("/skills",
  isAuth,
  skillsStepValidator,
  validate,
  profileStepsController.completeStep5
);

router.post(
  "/new-experience",
  isAuth,
  experienceValidator,
  validate,
  experienceAndEducation.addExperience
);
router.post(
  "/new-eudcation",
  isAuth,
  educationValidator,
  validate,
  experienceAndEducation.addEducation
);

router.delete(
  "/experience/:id",
  isAuth,
  experienceAndEducation.deleteExperience
);
router.delete("/education/:id", isAuth, experienceAndEducation.deleteEducation);

router.post("/add-skill",isAuth,addSkillValidator,validate,userProfileController.addSkill);

router.delete("/delete-skill",isAuth,userProfileController.deleteSkill);

module.exports = router;
