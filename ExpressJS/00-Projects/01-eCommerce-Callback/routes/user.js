const express = require("express");
const router = express.Router();

const { handleUserSignup } = require("../controllers/signup.js");
const { handleUserLogin } = require("../controllers/login.js");
const { handleUserLogout } = require("../controllers/logout.js");

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/logout", handleUserLogout);

module.exports = router;
