const bcrypt = require("bcrypt");

const User = require("../models/users.js");

const asyncHandler = require("../utils/asyncHandler.js");
const { isEmail } = require("../utils/verifyEmail.js");
const { setUser } = require("../utils/tokenizer.js");

const handleUserLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Verify user
  const okEmail = email.toString().toLowerCase();
  if (!isEmail(okEmail)) return res.render("login", { error: "Invalid Email" });

  const user = await User.findOne({ email: okEmail });
  if (!user) return res.render("login", { error: "User doesn't Exist!" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.render("login", { error: "Incorrect Password!" });

  // Generate token and send cookie
  const token = setUser(user);
  res.cookie("token", token);

  return res.redirect("/home");
});

module.exports = { handleUserLogin };
