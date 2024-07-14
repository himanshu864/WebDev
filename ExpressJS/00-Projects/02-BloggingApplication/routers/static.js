const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  if (!req.user) return res.redirect("/signin");
  return res.render("home", { user: req.user });
});

router.get("/signin", (req, res) => {
  if (req.user) return res.redirect("/");
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  if (req.user) return res.redirect("/");
  return res.render("signup");
});

module.exports = router;
