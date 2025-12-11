const Job = require("../../models/Company/Job");
const UserApplication = require("../../models/User/UserApplication");

// const jobSearch = async (req, res, next) => {
//   try {
//     const { q, country } = req.query;
//     const filters = {};

//     if (q) {
//       filters.$or = [
//         { jobTitle: { $regex: q, $options: "i" } },
//         { jobDescription: { $regex: q, $options: "i" } },
//         { jobLocation: { $regex: q, $options: "i" } },
//       ];
//     }

//     if (country) {
//       filters.jobLocation = { $regex: `^${country}$`, $options: "i" };
//     }

//     if (q || country) {
//       const jobs = await Job.find(filters);
//       return res.status(200).json({
//         code: 200,
//         status: true,
//         message: "Jobs Fetched Successfully",
//         jobs,
//       });
//     }

//     const popularJobs = await Job.aggregate([
//       { $group: { _id: "$jobTitle", count: { $sum: 1 } } },
//       { $sort: { count: -1 } },
//       { $limit: 15 },
//     ]);

//     return res.status(200).json({
//       code: 200,
//       status: true,
//       message: "Popular Jobs Fetched Successfully",
//       popularJobs,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const jobSearch = async (req, res, next) => {
  try {
    const { q, country } = req.query;

    let query = {};

    if (q && country) {
      query.$and = [
        {
          $or: [{ jobTitle: { $regex: q.trim(), $options: "i" } }],
        },
        { jobLocation: { $regex: country.trim(), $options: "i" } },
      ];
    } else if (q) {
      query.$or = [{ jobTitle: { $regex: q.trim(), $options: "i" } }];
    } else if (country) {
      query.jobLocation = { $regex: country.trim(), $options: "i" };
    }

    const jobs = await Job.find(query)
      .populate("companyId", "companyName") // I edited this populate companyId with companyName
      .exec();

    return res.status(200).json({
      code: 200,
      status: true,
      message: "Jobs Fetched Successfully",
      jobs,
    });
  } catch (error) {
    next(error);
  }
};

const getJobsByTitle = async (req, res, next) => {
  try {
    const { jobTitle } = req.params;
    const jobs = await Job.find({
      jobTitle: { $regex: new RegExp(`^${jobTitle}$`, "i") },
    });
    res.status(200).json({
      code: 200,
      status: true,
      message: "Jobs Fetched Successfully",
      jobs,
    });
  } catch (err) {
    next(err);
  }
};

const getJobsCountByCountry = async (req, res, next) => {
  try {
    const stats = await Job.aggregate([
      { $group: { _id: "$jobLocation", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);
    res.status(200).json({
      code: 200,
      status: true,
      message: "Jobs Fetched Successfully",
      stats,
    });
  } catch (err) {
    next(err);
  }
};

const getJobsByLocation = async (req, res, next) => {
  try {
    const { country } = req.params;
    const jobs = await Job.find({
      jobLocation: { $regex: new RegExp(`^${country}$`, "i") },
    });
    res.status(200).json({
      code: 200,
      status: true,
      message: "Jobs Fetched Successfully",
      jobs,
    });
  } catch (err) {
    next(err);
  }
};

// const applyToJob = async (req, res, next) => {
//   try {
//     const userId = req.account._id;
//     const { jobId } = req.params;

//     const job = await Job.findById(jobId);
//     if (!job) {
//       res.status(404);
//       throw new Error("Job not found");
//     }

//     const existingApplication = await UserApplication.findOne({ userId, jobId });
//     if (existingApplication) {
//       return res.status(400).json({
//         code: 400,
//         status: false,
//         message: "You have already applied for this job",
//       });
//     }

//     const application = await UserApplication.create({
//       userId,
//       jobId,
//       companyId: job.companyId,
//     });

//     res.status(201).json({
//       code: 201,
//       status: true,
//       message: "Job application submitted successfully",
//       application,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const applyToJob = async (req, res, next) => {
  try {
    const userId = req.account._id;
    const { jobId } = req.params;

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) {
      res.status(404);
      throw new Error("Job not found");
    }

    // Check if user already applied
    const existingApplication = await UserApplication.findOne({
      userId,
      jobId,
    });
    if (existingApplication) {
      return res.status(400).json({
        code: 400,
        status: false,
        message: "You have already applied for this job",
      });
    }

    // Create application
    const application = await UserApplication.create({
      userId,
      jobId,
      companyId: job.companyId,
    });

    // Add applicant to the job
    job.applicants.push({ userId });
    await job.save();

    // Populate applicants with user profile
    const populatedJob = await Job.findById(jobId)
      .populate({
        path: "applicants.userId",
        select: "name email profilePicture", // pick user fields you want
      })
      .populate("companyId", "companyName"); // optional: company info

    // Find the applied user's profile in applicants
    const appliedUser = populatedJob.applicants.find(
      (a) => a.userId._id.toString() === userId.toString()
    );

    res.status(201).json({
      code: 201,
      status: true,
      message: "Job application submitted successfully",
      application: {
        _id: application._id,
        userId: application.userId,
        jobId: application.jobId,
        companyId: application.companyId,
        userProfile: appliedUser.userId,
      },
      job: {
        _id: populatedJob._id,
        jobTitle: populatedJob.jobTitle,
        applicants: populatedJob.applicants.map((app) => ({
          userProfile: app.userId,
          status: app.status,
          appliedAt: app.appliedAt,
        })),
        companyId: populatedJob.companyId,
      },
    });
  } catch (error) {
    next(error);
  }
};


const getUserAppliedJobs = async (req, res, next) => {
  try {
    const userId = req.account._id;

    const applications = await UserApplication.find({ userId })
      .populate({
        path: "jobId",
        select:
          "jobTitle jobLocation jobType jobDescription jobRate jobMinPay jobMaxPay",
      })
      .populate({
        path: "companyId",
        select: "companyName email phoneNumber",
      })
      .sort({ appliedAt: -1 });

    res.status(200).json({
      code: 200,
      status: true,
      message: "User applications fetched successfully",
      applications,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  jobSearch,
  getJobsByTitle,
  getJobsCountByCountry,
  getJobsByLocation,
  applyToJob,
  getUserAppliedJobs,
};
