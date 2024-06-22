const URL = require("../models/urlModel.js");
const asyncHandler = require("../utils/asyncHandler");

const handleStatic = asyncHandler(async (req, res) => {
  const allTheData = await URL.find({});
  res.render("index.ejs", { data: allTheData });
});

module.exports = handleStatic;
