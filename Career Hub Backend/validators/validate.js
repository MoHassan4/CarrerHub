const {validationResult} = require("express-validator");

const validate = (req,res,next)=>{
    const errors = validationResult(req);

    if(errors.isEmpty()){
        return next();
    }

    const mappedErrors = {};

    errors.array().forEach((error)=>{
     mappedErrors[error.path] = error.msg;
    });

    return res.status(400).json({
        status : false,
        message : "Validation Failed",
        errors : mappedErrors
    });
   
};

module.exports = validate;