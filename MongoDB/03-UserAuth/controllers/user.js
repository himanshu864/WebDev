const User = require("../models/users");
const URL = require("../models/urlModel.js");
const asyncHandler = require("../utils/asyncHandler");

const handleUserSignup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  const allTheData = await URL.find({});
  return res.render("home", { data: allTheData });
});

module.exports = { handleUserSignup };
