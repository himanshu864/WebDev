const express = require("express");
const router = express.Router();

const { handleHomePage } = require("../controllers/homePage");
const { handleSignupPage } = require("../controllers/signupPage");
const { handleLoginPage } = require("../controllers/loginPage");

router.get("/home", handleHomePage);

router.get("/signup", handleSignupPage);

router.get("/login", handleLoginPage);

module.exports = router;
