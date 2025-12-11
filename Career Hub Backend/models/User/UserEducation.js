const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  university: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  degree : {type : String , required : true},
  eduCountry: { type: String, required: true },
  startDate : {type : Date , required : true},
  endDate : {type : Date , required : true},
  description : {type : String , required : true,default:""},
},{timestamps : true});

const userEducationModel =  mongoose.model("UserEducation", educationSchema);

module.exports = userEducationModel;

