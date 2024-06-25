const bcrypt = require("bcrypt");

const User = require("../models/users.js");
const URL = require("../models/urlModel.js");

const asyncHandler = require("../utils/asyncHandler.js");
const { isEmail } = require("../utils/verifyEmail.js");
const { setUser } = require("../utils/hashmap.js");

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
  const newUser = await User.create({
    name,
    email: okEmail,
    password: hashedPassword,
  });

  // Generate token and send cookie
  const token = setUser(newUser);
  res.cookie("token", token);

  const data = await URL.find({ createdBy: newUser._id });
  return res.render("home", { data, name });
});

module.exports = { handleUserSignup };
