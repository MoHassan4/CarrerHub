const mongoose = require("mongoose");
const {connectionUrl} = require("../config/keys")

const dbConnection = async () => {
  const connectionurl = connectionUrl;

  try {
    await mongoose.connect(connectionurl);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

module.exports = dbConnection;
