const Comment = require("../Models/Comment"); // Ensure the path matches

exports.createComment = async (req, res) => {
  try {
    const {
      appointmentId,
      comment,
      doctor,
      name,
      email,
      phone,
      date,
      time,
      donationCenter,
    } = req.body;

    if (
      !appointmentId ||
      !comment ||
      !doctor ||
      !name ||
      !email ||
      !phone ||
      !date ||
      !time ||
      !donationCenter
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newComment = new Comment({
      appointmentId,
      comment,
      doctor,
      name,
      email,
      phone,
      date,
      time,
      donationCenter,
    });

    await newComment.save();
    res
      .status(201)
      .json({ message: "Comment saved successfully", comment: newComment });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};
