const { Router } = require("express");
const router = Router();

const User = require("../models/user.js");
const asyncHandler = require("../utils/asyncHandler.js");

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const { fullName, email, password } = req.body;
    await User.create({ fullName, email, password });
    return res.redirect("/");
  })
);

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await User.matchPasswordGenToken(email, password);
    return res.cookie("token", token).redirect("/");
  } catch (err) {
    return res.render("signin", { error: err });
  }
});

module.exports = router;
