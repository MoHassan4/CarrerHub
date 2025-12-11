const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    companyName : {
        type : String,
        required : true,
        trim : true,
        default : ""
    },
    companyRepresentative : {
        type : String,
        required : true ,
        trim : true ,
        default : ""
    },
    email : {
        type : String,
        required : true ,
        unique : true,
        trim : true ,
        default : ""
    },
    password : {
        type : String,
        required : true ,
        default : ""
    },
    phoneNumber : {
        type : String,
        required : true ,
        default : ""
    },
    role : {
        type : String,
        required : true,
        default : "company"
    },
    forgotPasswordCode : {
        type : Number ,
        required : false,
        default : null
    },
},{timestamps : true});

const Company = mongoose.model("Company",companySchema);

module.exports = Company;