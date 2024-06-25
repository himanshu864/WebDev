const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const User = require("../models/users.js");
const URL = require("../models/urlModel.js");

const asyncHandler = require("../utils/asyncHandler.js");
const { isEmail } = require("../utils/verifyEmail.js");
const { setUser } = require("../utils/hashmap.js");

const handleUserLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Verify user
  const okEmail = email.toString().toLowerCase();
  if (!isEmail(okEmail)) return res.render("login", { error: "Invalid Email" });

  const user = await User.findOne({ email: okEmail });
  if (!user) return res.render("login", { error: "User doesn't Exist!" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.render("login", { error: "Incorrect Password!" });

  // Generate sessionId and pass cookie
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);

  const data = await URL.find({ createdBy: user._id });
  return res.render("home", { data, name: user.name });
});

module.exports = { handleUserLogin };
