const User = require("../models/users.js");
const URL = require("../models/urlModel.js");
const bcrypt = require("bcrypt");
const asyncHandler = require("../utils/asyncHandler.js");
const { isEmail } = require("../utils/verifyEmail.js");

const handleUserSignup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // verify email
  const okEmail = email.toString().toLowerCase();
  if (!isEmail(okEmail))
    return res.render("signup", { error: "Invalid Email!" });

  const user = await User.findOne({ email: okEmail });
  if (user) return res.render("signup", { error: "Email already exists!" });

  // encrypt password and create User
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email: okEmail, password: hashedPassword });

  const allTheData = await URL.find({});
  return res.render("home", { data: allTheData, name });
});

module.exports = { handleUserSignup };
