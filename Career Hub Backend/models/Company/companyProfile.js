const mongoose = require("mongoose");

const companyProfileSchema = mongoose.Schema({
    companyId : {
        type : mongoose.Types.ObjectId,
        ref : "Company",
        required : true,
    },
    companyIndustry:{
        type:String,
        required : true,
        trim : true
    },
    foundedYear :{
        type : Number,
        required : true,
    },
    companyDescription : {
        type : String ,
        required : true,
        trim : true,
    },
    companyCountry :{
        type : String,
        required : true,
        trim : true,
    },
    companyLogo : {
    public_id: { type: String, default: "" },
    url: { type: String, default: "" }
  },
},{timestamps : true});

const companyProfile = mongoose.model("companyProfile",companyProfileSchema);

module.exports = companyProfile;