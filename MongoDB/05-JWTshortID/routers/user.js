const express = require("express");
const router = express.Router();

const { handleUserSignup } = require("../controllers/signup");
const { handleUserLogin } = require("../controllers/login");

router.post("/signup", handleUserSignup);

router.post("/login", handleUserLogin);

module.exports = router;
