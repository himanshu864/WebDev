const bcrypt = require("bcrypt");

const User = require("../models/users.js");
const URL = require("../models/urlModel.js");

const asyncHandler = require("../utils/asyncHandler.js");
const { isEmail } = require("../utils/verifyEmail.js");

const handleUserLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Verify email and password
  const okEmail = email.toString().toLowerCase();
  if (!isEmail(okEmail)) return res.render("login", { error: "Invalid Email" });

  const user = await User.findOne({ email: okEmail });
  if (!user) return res.render("login", { error: "User doesn't Exist!" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.render("login", { error: "Incorrect Password!" });

  const allTheData = await URL.find({});
  return res.render("home", { data: allTheData, name: user.name });
});

module.exports = { handleUserLogin };
