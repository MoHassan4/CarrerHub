const express = require("express");
const isAuth = require("../../middlewares/isAuth");
const { userProfileController } = require("../../controllers");
const upload = require("../../middlewares/uploadFile");
const { profileUpdateValidator } = require("../../validators/profile");
const validate = require("../../validators/validate");
const router = express.Router();

router.get("/profile", isAuth, userProfileController.getUserProfile);
router.put(
  "/profile",
  isAuth,
  upload.single("profilePic"),
    profileUpdateValidator,
    validate,
  userProfileController.updateUserProfile
);

module.exports = router;
