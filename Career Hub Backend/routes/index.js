const authRoute = require("./auth");
const userRoute = require("./User/user");
const profileStepsRoute = require("./User/userProfileRoutes");
const userJobRoutes = require("./User/jobRoutes");
const companyProfileRoutes = require("./Company/companyProfileRoutes");
const companyJobRoutes = require("./Company/jobRoutes");


module.exports = {authRoute , userRoute , profileStepsRoute,userJobRoutes,companyProfileRoutes,companyJobRoutes};