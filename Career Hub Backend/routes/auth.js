const express = require("express");
const router = express.Router();
const {authController} = require("../controllers");
const { userSignupValidator, companySignupValidator, signinValidator, emailValidator, recoverPasswordValidator } = require("../validators/authValidators");
const validate = require("../validators/validate");
const isAuth = require("../middlewares/isAuth");

router.post("/user-signup", userSignupValidator , validate,authController.userSignupController);

router.post("/company-signup", companySignupValidator,validate,authController.companySignupController);

router.post("/sign-in", signinValidator,validate,authController.signinController);

router.post("/forgot-password",emailValidator ,validate,authController.forgotPasswordCodeController);

router.post("/change-password",isAuth,recoverPasswordValidator,validate,authController.changePasswordController);

module.exports = router;