const userModel = require("../Models/UserModel");

//GET USER LIST
const getUserListController = async (req, res) => {
  try {
    const userData = await userModel
      .find({ role: "Patient" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: userData.length,
      message: "User List Fetched Successfully",
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In User List API",
      error,
    });
  }
};
//GET HOSPITAL LIST
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "Hospital" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: hospitalData.length,
      message: "HOSPITAL List Fetched Successfully",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital List API",
      error,
    });
  }
};
//GET LAB LIST
const getlabListController = async (req, res) => {
  try {
    const labData = await userModel
      .find({ role: "Lab" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: labData.length,
      message: "LAB List Fetched Successfully",
      labData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In LAB List API",
      error,
    });
  }
};


//EXPORT
module.exports = {
  getUserListController,
  getHospitalListController,
  getlabListController,
};
