const mongoose = require("mongoose");
const User = require("../models/user");
const asyncHandler = require("../utils/asyncHandler");

const verifyId = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(userId))
    return res.status(404).json({ error: "Invalid UserID Format" });

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  next();
});

const handleGetUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
});

const handleUpdateUserById = asyncHandler(async (req, res) => {
  const updates = req.body;
  await User.findByIdAndUpdate(req.params.id, { ...updates });
  return res.json({
    status: "Successfully Updated!",
    updates: { ...updates },
  });
});

const handleDeleteUserById = asyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Successfully Deleted!" });
});

module.exports = {
  verifyId,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
