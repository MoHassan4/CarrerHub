const mongoose = require("mongoose");

const userExperienceSchema = mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", 
    required: true,
  },
    jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  description : {type : String , required : true,default:""},
},{timestamps : true});

const userProfileModel = mongoose.model("UserExperience",userExperienceSchema);

module.exports = userProfileModel;

