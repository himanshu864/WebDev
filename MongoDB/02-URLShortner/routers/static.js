const express = require("express");
const router = express.Router();
const URL = require("../models/urlModel.js");

router.get("/", async (req, res) => {
  const allTheData = await URL.find({});
  res.render("index.ejs", { data: allTheData });
});

module.exports = router;
