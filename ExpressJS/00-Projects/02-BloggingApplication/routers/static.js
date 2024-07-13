const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("home.ejs");
});

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

module.exports = router;
