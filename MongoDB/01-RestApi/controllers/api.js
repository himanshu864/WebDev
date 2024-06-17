const User = require("../models/user");
const asyncHandler = require("../utils/asyncHandler");

const handleGetApi = asyncHandler(async (req, res) => {
  const user = await User.find({});
  return res.json(user);
});

const handleCreateUser = asyncHandler(async (req, res) => {
  const user = req.body;
  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "gender",
    "job_title",
  ];

  for (const field of requiredFields)
    if (!user[field])
      return res.status(400).json({ Error: "All fields are required!" });

  await User.create({ ...user });
  return res.status(201).json({ status: "Successfully Created!" });
});

module.exports = { handleGetApi, handleCreateUser };
