const jwt = require("jsonwebtoken");
const { jwtSecretkey } = require("../config/keys");

const generateToken = (user) => {
    try{
    const payload = {
         _id: user._id,
         email: user.email,
         phoneNumber: user.phoneNumber,
         role : user.role
    }
    
    if (user.role === "jobseeker") {
        payload.firstName = user.firstName;
        payload.lastName = user.lastName;
    };

    if (user.role === "company"){
        payload.companyName = user.companyName;
    }

  const token = jwt.sign(payload,jwtSecretkey,{ expiresIn: "7d" });

  return token;
    }catch(error){
        throw new Error(`Token Generation Failed ${error.message}`);
    }
};

module.exports = generateToken;
