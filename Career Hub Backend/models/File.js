const mongoose = require("mongoose");

const fileSChema = mongoose.Schema({
    key : {
        type : String , required : true
    },
    size : Number,
    mimetype : String ,
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : "Users"
    }

},{timestamps : true});

const File = mongoose.model("File" , fileSChema);

module.exports = File;

