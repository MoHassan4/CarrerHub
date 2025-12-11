const cloudinary = require("cloudinary").v2;
const{cloudName , cloudApiKey , cloudApiSecret} = require("../config/keys");

cloudinary.config({
cloud_name: cloudName,
  api_key: cloudApiKey,
  api_secret: cloudApiSecret,
});

module.exports = cloudinary;