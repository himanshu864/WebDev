const express = require("express");
const router = express.Router();

const { handleUserSignup } = require("../controllers/signup");
const { handleUserLogin } = require("../controllers/login");
const { restrictAdminSignup } = require("../middlewares/unauth");

router.post("/signup", restrictAdminSignup, handleUserSignup);

router.post("/login", handleUserLogin);

module.exports = router;
