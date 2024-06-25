const User = require("../models/users.js");
const URL = require("../models/urlModel.js");
const bcrypt = require("bcrypt");
const asyncHandler = require("../utils/asyncHandler.js");
const { isEmail } = require("../utils/verifyEmail.js");

const handleUserSignup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!isEmail(email)) {
    return res.render("signup", { error: "Invalid Email!" });
  }

  const properEmail = email.toString().toLowerCase();

  const user = await User.findOne({ email: properEmail });
  if (user) {
    return res.render("signup", { error: "Email already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email: properEmail, password: hashedPassword });
  const allTheData = await URL.find({});
  return res.render("home", { data: allTheData, name });
});

module.exports = { handleUserSignup };
