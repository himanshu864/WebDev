const { Router } = require("express");
const multer = require("multer");
const router = Router();

const asyncHandler = require("../utils/asyncHandler");

const Blog = require("../models/blog");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/",
  upload.single("coverImage"),
  asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    await Blog.create({
      body,
      title,
      createdBy: req.user._id,
      coverImageURL: `/uploads/${req.file.filename}`,
    });
    return res.redirect("/");
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userBlogs = await Blog.find({ createdBy: req.params.id });
    return res.render("home", { user: req.user, blogs: userBlogs });
  })
);

module.exports = router;
