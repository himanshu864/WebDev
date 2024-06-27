const express = require("express");
const router = express.Router();

const URL = require("../models/urlModel.js");
const asyncHandler = require("../utils/asyncHandler.js");
const { restrictUnauthenticated } = require("../middlewares/unauth.js");

router.get(
  "/",
  restrictUnauthenticated,
  asyncHandler(async (req, res) => {
    const data = await URL.find({ createdBy: req.user._id });
    res.render("home", { name: req.user.name, data });
  })
);

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
