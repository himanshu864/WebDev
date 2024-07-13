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

router.post(
  "/signin",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.matchPassword(email, password);
    console.log(user);
    return res.redirect("/");
  })
);

module.exports = router;
