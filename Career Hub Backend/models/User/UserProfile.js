const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", 
    required: true,
    },
    birthDate : {
        type : Date ,
        required : true,
    },
    country : {
        type : String ,
        required : true,
    },
    nationality : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    targetJobLevel :{
        type : String,
        required : true,
    },
    targetJobTitle : {
        type : String,
        required : true,
    },
    targetJobLocation: {
        type : String,
        required : true,
    },
    skills: {
    type: [String],
    default: [],
  },
}, {timestamps : true});

const userProfileModel = mongoose.model("UserProfile",userProfileSchema);

module.exports =  userProfileModel;

