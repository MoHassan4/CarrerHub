const jwt = require("jsonwebtoken");
const { jwtSecretkey } = require("../config/keys");
const User = require("../models/User/User");
const Company = require("../models/Company/Company");

const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(400);
      throw new Error("Invalid or Missing Token");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, jwtSecretkey);
    if (!decoded || !decoded._id) {
      res.status(401);
      throw new Error("Unauthorized User");
    }

    let account = null;

    // if (decoded.role === "jobseeker") {
    //   account = await User.findById(decoded._id).select("-password -forgotPasswordCode");
    // } else if (decoded.role === "company") {
    //   account = await Company.findById(decoded._id).select("-password -forgotPasswordCode");
    // }

    // changed
    if (decoded.role === "jobseeker") {
      account = await User.findById(decoded._id).select(
        "-password -forgotPasswordCode"
      );
    } else if (decoded.role === "company") {
      account = await Company.findById(decoded._id).select(
        "-password -forgotPasswordCode"
      );
    } else {
      // fallback: check both
      account =
        (await User.findById(decoded._id).select(
          "-password -forgotPasswordCode"
        )) ||
        (await Company.findById(decoded._id).select(
          "-password -forgotPasswordCode"
        ));
    }

    if (!account) {
      res.status(404);
      throw new Error("Account not found");
    }
    req.account = account;
    next();

  } catch (error) {
    next(error);
  }
};

module.exports = isAuth;
