const express = require("express");
const router = express.Router();

const { handleHomePage } = require("../controllers/static");
const { handleSignupPage } = require("../controllers/signup");

router.get("/home", handleHomePage);

router.get("/signup", handleSignupPage);

module.exports = router;
