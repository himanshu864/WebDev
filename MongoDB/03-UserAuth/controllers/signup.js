const User = require("../models/users.js");
const URL = require("../models/urlModel.js");
const asyncHandler = require("../utils/asyncHandler.js");
const { isEmail } = require("../utils/verifyEmail.js");

const handleUserSignup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!isEmail(email)) {
    return res.render("signup", { error: "Invalid Email!" });
  }

  const properEmail = email.toString().toLowerCase();

  await User.create({ name, email: properEmail, password });
  const allTheData = await URL.find({});
  return res.render("home", { data: allTheData, name });
});

module.exports = { handleUserSignup };
