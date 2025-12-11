const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    companyId :{
        type : mongoose.Types.ObjectId,
        ref : "Company",
        required : true,
    },
    jobLocation : {
        type : String,
        required : true,
        trim : true,
    },
    jobTitle : {
        type : String,
        required : true,
        trim : true,
    },
    jobDescription : {
        type : String,
        required : true,
        trim : true
    },
    jobType:{
        type : String,
        required : true
    },
    jobMinPay : {
        type : Number,
        required : true,
    },
    jobMaxPay : {
        type : Number,
        required : true,
    },
    jobRate :{
        type : String,
        required : true,
        trim : true,
    },
    applicants : [
        {
            userId:{
                type : mongoose.Types.ObjectId,
                ref : "Users",
            },
            status : {
                type : String,
                enum : ["pending","rejected","accepted"],
                default : "pending",
            },
            appliedAt : {
                type : Date,
                default : Date.now
            },
        }
    ]
},{timestamps: true});

const Job = mongoose.model("Job",jobSchema);

module.exports = Job;