const { nanoid } = require("nanoid");
const URL = require("../models/urlModel");

const asyncHandler = require("../utils/asyncHandler");

const handleGenNewShortURL = asyncHandler(async (req, res) => {
  const shortID = nanoid(8);
  const body = req.body.url;
  if (!body) return res.status(400).json({ error: "URL required" });

  await URL.create({
    shortID: shortID,
    redirectURL: body,
    visitedHistory: [],
  });

  const allTheData = await URL.find({});
  return res.render("home", {
    shortID: shortID,
    data: allTheData,
    name: "friend",
  });
});

module.exports = { handleGenNewShortURL };
