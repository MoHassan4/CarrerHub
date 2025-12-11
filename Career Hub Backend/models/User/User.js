const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      trim: true,
      default: "",
      unique: true,
    },
    password: {
      type: String,
      required: true,
      default: "",
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    role: {
      type: String,
      required: true,
      default: "jobseeker",
    },
    forgotPasswordCode: {
      type: Number,
      required: false,
      default: null,
    },
    profileStep: { type: Number, default: 0 }, // 0..4
    isProfileComplete: { type: Boolean, default: false },
    profileProgress: {
      step1At: Date,
      step2At: Date,
      step3At: Date,
      step4At: Date,
      step5At: Date,
    },
    profilePic: {
      public_id: { type: String, default: "" },
      url: { type: String, default: "" },
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],

    appliedJobs: [
      {
        jobId: {
          type: mongoose.Types.ObjectId,
          ref: "Job",
        },
        companyId: {
          type: mongoose.Types.ObjectId,
          ref: "Company",
        },
        status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending",
        },
        appliedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { Timestamps: true }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
