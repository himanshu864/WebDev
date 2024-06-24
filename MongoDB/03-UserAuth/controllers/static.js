const URL = require("../models/urlModel.js");
const asyncHandler = require("../utils/asyncHandler");

const handleHomePage = asyncHandler(async (req, res) => {
  const allTheData = await URL.find({});
  res.render("home", { data: allTheData });
});

module.exports = { handleHomePage };
