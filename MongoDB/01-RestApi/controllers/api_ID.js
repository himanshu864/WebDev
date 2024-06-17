const mongoose = require("mongoose");
const User = require("../models/user");

const verifyId = async (req, res, next) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId))
    return res.status(404).json({ error: "Invalid UserID Format" });

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  next();
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  const updates = req.body;
  try {
    await User.findByIdAndUpdate(req.params.id, { ...updates });
    return res.json({
      status: "Successfully Updated!",
      updates: { ...updates },
    });
  } catch {
    return res.status(500).json({ error: "Something Went Wrong" });
  }
};

const handleDeleteUserById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Successfully Deleted!" });
  } catch {
    return res.status(500).json({ error: "Something Went Wrong" });
  }
};

module.exports = {
  verifyId,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
