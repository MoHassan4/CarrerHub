const express = require ("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnection = require("./db/Dbconnection");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandling");
const notFound = require("./middlewares/notFound");
const { authRoute, userRoute, profileStepsRoute, userJobRoutes , companyProfileRoutes , companyJobRoutes } = require("./routes");
const app = express();

dbConnection();

//third-party-modules
app.use(express.json({limit : "500mb"}));
app.use(bodyParser.urlencoded({limit : "500mb" , extended : true}));
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/profile",userRoute);
app.use("/api/v1/register",profileStepsRoute);
app.use("/api/v1/company/jobs",companyJobRoutes);
app.use("/api/v1/company/profile",companyProfileRoutes);
app.use("/api/v1/user/jobs",userJobRoutes);


// NotFound Rout
app.use(notFound);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;

