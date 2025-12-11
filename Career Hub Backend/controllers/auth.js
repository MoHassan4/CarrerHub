const User = require("../models/User/User");
const Company = require("../models/Company/Company");
const hashPassword = require("../utils/hashPassword");
const comparePassword = require("../utils/comparePassword");
const generateToken = require("../utils/generateToken");
const generateCode = require("../utils/generateCode");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const { jwtSecretkey } = require("../config/keys");

const userSignupController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    const isUserEmailExist = await User.findOne({ email });
    const isCompanyEmail = await Company.findOne({ email });

    if (isUserEmailExist || isCompanyEmail) {
      res.status(400);
      throw new Error("This Email is Already Exist");
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    const token = jwt.sign({ _id: newUser._id }, jwtSecretkey, {
      expiresIn: "30d",
    });

    await newUser.save();

    res
      .status(201)
      .json({
        status: true,
        message: "User Created Successfully",
        role: "user",
        newUser,
        token,
      });
  } catch (error) {
    next(error);
  }
};

const companySignupController = async (req, res, next) => {
  try {
    const { companyName, companyRepresentative, email, password, phoneNumber } =
      req.body;

    const isCompanyEmailExist = await Company.findOne({ email });

    const isUserEmail = await User.findOne({ email });

    if (isUserEmail || isCompanyEmailExist) {
      res.status(400);
      throw new Error("This Email is Already Exists");
    }

    const hashedPassword = await hashPassword(password);

    const newCompany = new Company({
      companyName,
      companyRepresentative,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    const token = jwt.sign({ _id: newCompany._id }, jwtSecretkey, {
      expiresIn: "30d",
    });

    await newCompany.save();

    res
      .status(201)
      .json({
        status: true,
        message: "Company Created Successfully",
        role: "company",
        newCompany,
        token,
      });
  } catch (error) {
    next(error);
  }
};

const signinController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const company = await Company.findOne({ email });

    const account = user || company;

    if (!account) {
      res.status(404);
      throw new Error("This Email not Associated with any account");
    }

    const match = await comparePassword(password, account.password);

    if (!match) {
      res.status(401);
      throw new Error("Invalid Credentials");
    }

    const token = generateToken(account);

    const role = user ? "user" : "company";

    res.status(200).json({
      code: 200,
      status: true,
      message: "Sign in Successfully",
      token,
      role,
    });
  } catch (error) {
    next(error);
  }
};

const forgotPasswordCodeController = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    const company = await Company.findOne({ email });

    const account = user || company;

    if (!account) {
      res.code = 404;
      throw new Error("Email Not Found");
    }

    const code = generateCode(6);

    account.forgotPasswordCode = code;

    await account.save();

    await sendEmail({
      emailTo: account.email,
      subject: "Forgot Password Code",
      code,
      content: "Change Your Password",
    });

    res
      .status(200)
      .json({
        code: 200,
        status: true,
        message: "Forgot Password Code Sent Successfully",
      });
  } catch (error) {
    next(error);
  }
};

const changePasswordController = async (req, res, next) => {
  try {
    const { email, code, password } = req.body;

    const user = await User.findOne({ email });
    const company = await Company.findOne({ email });

    const account = user || company;

    if (!account) {
      res.code = 401;
      throw new Error("Email Not Found");
    }

    if (code !== account.forgotPasswordCode) {
      res.code = 400;
      throw new Error("Forgot Password Code Not Correct");
    }

    if (password === account.password) {
      res.code = 400;
      throw new Error("New Password Mustn't Equal to Old Password");
    }

    const hashedPassword = hashPassword(password);

    account.password = hashedPassword;

    account.forgotPasswordCode = null;

    await account.save();

    res
      .status(200)
      .json({
        code: 200,
        status: true,
        message: "Password Changed Successfully",
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userSignupController,
  companySignupController,
  signinController,
  forgotPasswordCodeController,
  changePasswordController,
};
