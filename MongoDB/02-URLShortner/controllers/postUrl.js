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

  // return res.json({ shortID: shortID });

  const allTheData = await URL.find({});
  return res.render("index.ejs", { shortID: shortID, data: allTheData });
});

module.exports = { handleGenNewShortURL };
