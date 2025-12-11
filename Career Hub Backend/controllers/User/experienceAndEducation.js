const userExperience = require("../../models/User/UserExperience");
const userEducation = require("../../models/User/UserEducation");

// const addExperience = async (req, res, next) => {
//   try {
//     const {
//       jobTitle,
//       companyName,
//       jobLocation,
//       startDate,
//       endDate,
//       description,
//     } = req.body;
//     const { _id } = req.account;

//     if (!jobTitle || !companyName || !jobLocation || !startDate) {
//       res.status(400);
//       throw new Error("Missing required fields");
//     }

//     const newExp = new userExperience({
//       _id,
//       jobTitle,
//       companyName,
//       jobLocation,
//       startDate,
//       endDate,
//       description,
//     });

//     await newExp.save();

//     res
//       .status(200)
//       .json({
//         code: 200,
//         status: true,
//         message: "Experience Added Sucessfully",
//         data: { newExp },
//       });
//   } catch (error) {
//     next(error);
//   }
// };

//edited
const addExperience = async (req, res, next) => {
  try {
    const {
      jobTitle,
      companyName,
      jobLocation,
      startDate,
      endDate,
      description,
    } = req.body;

    const userId = req.account._id; // We Corrected this field

    if (!jobTitle || !companyName || !jobLocation || !startDate) {
      res.status(400);
      throw new Error("Missing required fields");
    }

    const newExp = new userExperience({
      userId, // We fixed this
      jobTitle,
      companyName,
      jobLocation,
      startDate,
      endDate,
      description,
    });

    await newExp.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Experience Added Successfully",
      data: { newExp },
    });
  } catch (error) {
    next(error);
  }
};


// edited
const addEducation = async (req, res, next) => {
  try {
    const {
      fieldOfStudy,
      university,
      degree,
      eduCountry,
      startDate,
      endDate,
      description,
    } = req.body;
    const userId = req.account._id; // We Corrected this field

    if (!fieldOfStudy || !university || !degree || !eduCountry || !startDate) {
      res.status(400);
      throw new Error("Missing required fields");
    }

    const newEdu = new userEducation({
      userId, // We fixed this
      fieldOfStudy,
      university,
      degree,
      eduCountry,
      startDate,
      endDate,
      description,
    });

    await newEdu.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Education Added Sucessfully",
      data: { newEdu },
    });
  } catch (error) {
    next(error);
  }
};

const deleteExperience = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.account._id;

    const experience = await userExperience.findOne({ _id: id, userId });

    if (!experience) {
      res.status(404);
      throw new Error("Experience not found");
    }

    await userExperience.findByIdAndDelete(id);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteEducation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.account._id;

    const education = await userEducation.findOne({ _id: id, userId });

    if (!education) {
      res.status(404);
      throw new Error("Education not found");
    }

    await userEducation.findByIdAndDelete(id);

    res.status(200).json({
      code: 200,
      status: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addExperience,
  addEducation,
  deleteExperience,
  deleteEducation,
};
