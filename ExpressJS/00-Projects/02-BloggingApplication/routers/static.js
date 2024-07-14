const { Router } = require("express");
const router = Router();

const Blog = require("../models/blog.js");

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/signin");
  const blogs = await Blog.find({});
  return res.render("home", { user: req.user, blogs });
});

router.get("/signin", (req, res) => {
  if (req.user) return res.redirect("/");
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  if (req.user) return res.redirect("/");
  return res.render("signup");
});

router.get("/addBlog", (req, res) => {
  if (!req.user) return res.redirect("/signin");
  return res.render("addBlog");
});

module.exports = router;
