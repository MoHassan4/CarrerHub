const User = require("../../models/User/User");
const userExperience = require("../../models/User/UserExperience");
const userEducation = require("../../models/User/UserEducation");
const userProfile = require("../../models/User/UserProfile");
const cloudinary = require("../../utils/cloudinary");

// const getUserProfile = async (req, res, next) => {
//   try {
//     const { _id } = req.account;

//     // Get user basic data (without password)
//     const user = await User.findById(_id).select(
//       "-password -forgotPasswordCode"
//     );

//     if (!user) {
//       res.code = 404;
//       throw new Error("User Not Found");
//     }

//     // Get user profile (main info)
//     const profile = await userProfile.findOne({ userId: _id });

//     // Get user experience and education
//     const experiences = await userExperience.find({ userId: _id });
//     const educations = await userEducation.find({ userId: _id });

//     // Send response
//     res.status(200).json({
//       code: 200,
//       status: true,
//       message: "User Fetched Successfully",
//       data: {
//         user,
//         profile: {
//           ...profile?._doc,
//           skills: profile?.skills || [],
//         },
//         experiences,
//         educations,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const getUserProfile = async (req, res, next) => {
  try {
    const { _id } = req.account;

    const user = await User.findById(_id).select(
      "-password -forgotPasswordCode"
    );

    if (!user) {
      res.code = 404;
      throw new Error("User Not Found");
    }

    const profile = await userProfile.findById(_id);

    const experiences = await userExperience.find({ userId: _id });
    const educations = await userEducation.find({ userId: _id });

    res.status(200).json({
      code: 200,
      status: true,
      message: "User Fetched Successfully",
      data: {
        user,
        profile: {
          ...profile?._doc,
          skills: profile?.skills || [], // <-- uses the variable that now exists
        },
        experiences,
        educations,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateUserProfile = async (req, res, next) => {
  try {
    const { _id } = req.account;
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      targetJobTitle,
      targetJobLevel,
      targetJobLocation,
      birthDate,
      country,
      nationality,
      gender,
    } = req.body;

    const updates = { firstName, lastName, email, phoneNumber };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "profile-pics",
      });

      updates.profilePic = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }

    const updatedUser = await User.findByIdAndUpdate({ _id }, updates, {
      new: true,
    });

    const profileData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      targetJobTitle,
      targetJobLevel,
      targetJobLocation,
      birthDate,
      country,
      nationality,
      gender,
    };

    const updatedProfile = await userProfile.findOneAndUpdate(
      { userId: _id }, // now this is correct
      profileData,
      { new: true, upsert: true }
    );

    res
      .status(200)
      .json({
        code: 200,
        status: true,
        message: "Profile Updated Successfully",
        data: { user: updatedUser, profile: updatedProfile },
      });
  } catch (error) {
    next(error);
  }
};

const addSkill = async (req, res, next) => {
  try {
    const { _id } = req.account;
    const { skill } = req.body;

    if (!skill || !skill.trim()) {
      res.status(400);
      throw new Error("Skill is required");
    }

    const profile = await userProfile.findOneAndUpdate(
      { userId: _id },
      { $addToSet: { skills: skill.trim() } },
      { new: true, upsert: true }
    );

    res.status(200).json({
      code: 200,
      status: true,
      message: "Skill added successfully",
      skills: profile.skills,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSkill = async (req, res, next) => {
  try {
    const { _id } = req.account;
    const { skill } = req.body;

    const profile = await userProfile.findOne({ userId: _id });
    if (!profile) {
      res.status(404);
      throw new Error("User profile not found");
    }

    profile.skills = profile.skills.filter((s) => s !== skill);
    await profile.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Skill deleted successfully",
      skills: profile.skills,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserProfile, updateUserProfile, addSkill, deleteSkill };
