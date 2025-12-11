const Job = require("../../models/Company/Job");
const UserApplication = require("../../models/User/UserApplication")
const User = require("../../models/User/User");
const userEducation = require("../../models/User/UserEducation");
const userProfile = require("../../models/User/UserProfile");
const userExperience = require("../../models/User/UserExperience");

// const viewApplicants = async(req,res,next)=>{
//     try{
//         const companyId = req.account._id;

//         const {jobId} = req.params;

//         const job = await Job.findOne({_id :jobId , companyId});



//         if (!job){
//             res.status(400);
//             throw new Error("Job Not Found");
//         }

//         const applicants = await UserApplication.find({jobId}).populate("userId","firstName lastName Email").sort({appliedAt : -1});

//         res.status(200).json({code : 200 , status : true , message : "Applicants fetched successfully",applicants,count:applicants.length});


//     }catch(error){
//         next(error);
//     }
// };


const viewApplicants = async (req, res, next) => {
  try {
    const companyId = req.account._id;
    const { jobId } = req.params;

    // Check if the job exists and belongs to the company
    const job = await Job.findOne({ _id: jobId, companyId });
    if (!job) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: "Job not found or you do not have access to this job",
      });
    }

    // Fetch all applicants for this job
    const applications = await UserApplication.find({ jobId }).sort({ appliedAt: -1 });

    // Fetch user profiles for each applicant safely
    const applicantsWithProfiles = await Promise.all(
      applications.map(async (app) => {
        // Declare userProfile properly inside the async function
        const user = await User.findById(app.userId).select("firstName lastName email");
        const profile = await userProfile.findById(app.userId).select(
          "targetJobTitle"
        );

        return {
          applicationId: app._id,
          status: app.status,
          appliedAt: app.appliedAt,
          profile: profile,
          user: user
        };
      })
    );

    // Return applicants with profile info
    res.status(200).json({
      code: 200,
      status: true,
      message: "Applicants fetched successfully",
      applicants: applicantsWithProfiles,
      count: applicantsWithProfiles.length,
      user: User
    });
  } catch (error) {
    next(error);
  }
};


const updateApplicantStatus = async (req, res, next) => {
  try {
    const { jobId, userId } = req.params; // get jobId and userId from route
    const { status } = req.body;

    if (!["accepted", "rejected"].includes(status)) {
      res.status(400);
      throw new Error("Status Not Valid");
    }

    const application = await UserApplication.findOneAndUpdate(
      { jobId, userId },
      { status },
      { new: true }
    );

    if (!application) {
      res.status(404);
      throw new Error("Application Not Found");
    }

    res.status(200).json({
      code: 200,
      status: true,
      message: `Applicant ${status} Successfully`,
      application,
    });
  } catch (error) {
    next(error);
  }
};


// const viewApplicantProfile = async(req,res,next)=>{
//     try{
//         const {userId} = req.params;

//         const user = await User.findById({userId}).select("-password -forgotPasswordCode");

//         if(!user){
//             res.status(400);
//             throw new Error("User Not Found");
//         }

//         const profile = await userProfile.findOne({userId});
//         const educations = await userEducation.find({userId});
//         const experiences = await userExperience.find({userId});

//         res.status(200).json({code : 200, status:true , message :"Profile Fetched Successfully",user,profile,educations,experiences});
//     }catch(error){
//         next(error);
//     }
// };


const viewApplicantProfile = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select(
      "-password -forgotPasswordCode"
    );

    if (!user) {
      res.status(400);
      throw new Error("User Not Found");
    }

    const profile = await userProfile.findById(userId); // fixed here
    const educations = await userEducation.find({ userId });
    const experiences = await userExperience.find({ userId });

    res.status(200).json({
      code: 200,
      status: true,
      message: "Profile Fetched Successfully",
      user,
      profile,
      educations,
      experiences,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {viewApplicants,updateApplicantStatus,viewApplicantProfile};