const Job = require("../../models/Company/Job");
const UserApplication = require("../../models/User/UserApplication")

const addJob = async(req,res,next)=>{
    try{
      const companyId = req.account._id; 

      const {
        jobLocation,
        jobTitle,
        jobDescription,
        jobType,
        jobMinPay,
        jobMaxPay,
        jobRate,
      } = req.body;

      const newJob = new Job({
        companyId, 
        jobLocation,
        jobTitle,
        jobDescription,
        jobType,
        jobMinPay,
        jobMaxPay,
        jobRate,
      });

      await newJob.save();

      res
        .status(201)
        .json({
          code: 201,
          status: true,
          message: "Job Created Successfully",
          job: newJob,
        });
    }catch(error){
        next(error);
    }
};

const getCompanyJobs = async(req,res,next)=>{
    try{
        const companyId = req.account._id;

        const jobs = await Job.find({companyId}).sort({createdAt : -1});

        res.status(200).json({code : 200 , status : true , message :"Jobs Fetched Successfully",jobs,count : jobs.length})
    }catch(error){
        next(error);
    }
};

const deleteJob = async(req,res,next)=>{
    try{
        const companyId = req.account._id;

        const {jobId} = req.params;

        const job = await Job.findOneAndDelete({_id:jobId , companyId});

        if(!job){
            res.status(400);
            throw new Error("Job Not Found");
        }

        await UserApplication.deleteMany({jobId});

        res.status(200).json({code : 200 , status : true , message : "Job Deleted Successfully"});

    }catch(error){
        next(error);
    }
};



module.exports= {addJob,getCompanyJobs,deleteJob};