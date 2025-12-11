const User = require("../../models/User/User");
const userProfile = require("../../models/User/UserProfile");
const userExperience = require("../../models/User/UserExperience");
const userEducation = require("../../models/User/UserEducation");
const cloudinary = require("../../utils/cloudinary");

const completeStep1 = async (req, res, next) => {
  try {
    const { _id } = req.account;
    const { targetJobLevel, targetJobTitle, targetJobLocation } = req.body;

    const Profile = await userProfile.findByIdAndUpdate(
      { _id },
      { targetJobLevel, targetJobTitle, targetJobLocation },
      { upsert: true, new: true }
    );

    await User.findByIdAndUpdate(
      { _id },
      { profileStep: 1, "profileProgress.step1At": new Date() }
    );

    res.json({
      code: 200,
      status: true,
      message: "Step1 Updated Successfully",
      Profile,
    });
  } catch (error) {
    next(error);
  }
};

// const completeStep2 = async(req,res,next)=>{
//     try{
//         const{_id} = req.account;

//         const{birthDate , country , nationality , gender, skills} = req.body;

//         let uploadResult = null;

//         if(req.file){
//             uploadResult = cloudinary.uploader.upload(req.file.path , {
//                 folder : "profile_pics",
//             });

//         const Profile = await User.findByIdAndUpdate({_id},{profilePic : {public_id : (await uploadResult).public_id} , url: (await uploadResult).secure_url});

//         await userProfile.findByIdAndUpdate({_id}, {birthDate , country , nationality , gender, skills} , {new : true});

//         await User.findByIdAndUpdate({_id} ,{profileStep:2 , "profileProgress.step2At": new Date(),});

//         res.status(200).json({code : 200 , status : true , message : "Step2 Updated Sucessfully" , Profile})

//         }
//     }catch(error){
//         next(error);
//     }
// };

const completeStep2 = async (req, res, next) => {
  try {
    const { _id } = req.account;
    const { birthDate, country, nationality, gender } = req.body;

    let uploadResult = null;

    // ✅ Upload only if file exists
    if (req.file) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "profile_pics",
      });

      // ✅ Update user profile picture
      await User.findByIdAndUpdate(_id, {
        profilePic: {
          public_id: uploadResult.public_id,
          url: uploadResult.secure_url,
        },
      });
    }

    // ✅ Update profile data regardless of file
    const Profile = await userProfile.findByIdAndUpdate(
      _id,
      { birthDate, country, nationality, gender },
      { new: true }
    );

    // ✅ Mark step completion
    await User.findByIdAndUpdate(_id, {
      profileStep: 2,
      "profileProgress.step2At": new Date(),
    });

    res.status(200).json({
      code: 200,
      status: true,
      message: "Step2 Updated Successfully",
      Profile,
    });
  } catch (error) {
    next(error);
  }
};

const completeStep3 = async (req, res, next) => {
  try {
    const { _id } = req.account;

    const nexExp = new userExperience({ ...req.body, _id });

    await User.findByIdAndUpdate(
      { _id },
      { profileStep: 3, "profileProgress.step3At": new Date() }
    );

    await nexExp.save();

    res
      .status(200)
      .json({
        code: 200,
        status: true,
        message: "Experience Added Successfully",
        nexExp,
      });
  } catch (error) {
    next(error);
  }
};

const completeStep4 = async (req, res, next) => {
  try {
    const { _id } = req.account;

    const nexEdu = new userEducation({ ...req.body, _id });

    await User.findByIdAndUpdate(
      { _id },
      {
        profileStep: 4,
        "profileProgress.step4At": new Date(),
      }
    );

    await nexEdu.save();

    res
      .status(200)
      .json({
        code: 200,
        status: true,
        message: "Step4 Updated Successfully",
        nexEdu,
      });
  } catch (error) {
    next(error);
  }
};

const completeStep5 = async (req, res, next) => {
  try {
    const { _id } = req.account;
    const { skills } = req.body;

    if (!Array.isArray(skills) || skills.length === 0) {
      res.status(400);
      throw new Error("At least one skill is required");
    }

    const profile = await userProfile.findOneAndUpdate(
      _id,
      { $set: { skills } },
      { new: true, upsert: true }
    );

    await User.findByIdAndUpdate(_id, {
      profileStep: 5,
      isProfileComplete: true,
      "profileProgress.step5At": new Date(),
    });

    res.status(200).json({
      code: 200,
      status: true,
      message: "Step 5 completed successfully",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  completeStep1,
  completeStep2,
  completeStep3,
  completeStep4,
  completeStep5,
};
