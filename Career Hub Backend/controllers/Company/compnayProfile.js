const Company = require("../../models/Company/Company");
const companyProfile = require("../../models/Company/companyProfile");
const cloudinary = require("../../utils/cloudinary");

/////////
const createCompanyProfile = async (req, res, next) => {
  try {
    const companyId = req.account._id;
    const { companyIndustry, foundedYear, companyDescription, companyCountry } =
      req.body;

    // Check if profile already exists
    const existingProfile = await companyProfile.findOne({ companyId });
    if (existingProfile) {
      res.status(400);
      throw new Error("Profile already exists. Use PUT to update it.");
    }

    let newProfileData = {
      companyId,
      companyIndustry,
      foundedYear,
      companyDescription,
      companyCountry,
    };

    // If there's a file (company logo)
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "company-logos",
      });

      newProfileData.companyLogo = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }

    // Create profile
    const newProfile = await companyProfile.create(newProfileData);

    res.status(201).json({
      code: 201,
      status: true,
      message: "Company profile created successfully",
      profile: newProfile,
    });
  } catch (error) {
    next(error);
  }
};

const getCompanyProfile = async (req, res, next) => {
  try {
    const companyId = req.account._id;
    const company = await Company.findById(companyId).select(
      "-password -forgotPasswordCode"
    );

    const profile = await companyProfile.findOne({ companyId });

    if (!company) {
      res.status(400);
      throw new Error("Company Not Found");
    }

    res.status(200).json({
      code: 200,
      status: true,
      message: "Company Getted Successfully",
      company,
      profile,
    });
  } catch (error) {
    next(error);
  }
};

const updateCompanyProfile = async (req, res, next) => {
  try {
    const companyId = req.account._id;

    const { companyIndustry, foundedYear, companyDescription, companyCountry } =
      req.body;

    let updates = {
      companyIndustry,
      foundedYear,
      companyDescription,
      companyCountry,
    };

    if (req.file) {
      const result = cloudinary.uploader.upload(req.file.path, {
        folder: "company-logos",
      });

      updates.companyLogo = {
        public_id: (await result).public_id,
        url: (await result).secure_url,
      };
    }

    const updatedProfile = await companyProfile.findOneAndUpdate(
      { companyId },
      updates,
      { new: true, upsert: true }
    );

    res.status(200).json({
      code: 200,
      status: true,
      message: "Profile Updated Successfully",
      profile: updatedProfile,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCompanyProfile,
  updateCompanyProfile,
  createCompanyProfile,
};
