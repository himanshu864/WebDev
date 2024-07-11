const express = require("express");
const router = express.Router();

const { homePage } = require("../controllers/homePage");
const { cartPage } = require("../controllers/cartPage");

const { restrictUnauthenticated } = require("../middlewares/unauth.js");

router.get("/", homePage);
router.get("/cart", restrictUnauthenticated, cartPage);

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
