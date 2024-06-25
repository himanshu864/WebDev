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
    createdBy: req.user._id,
  });

  const data = await URL.find({ createdBy: req.user._id });
  return res.render("home", { shortID, data, name: req.user.name });
});

module.exports = { handleGenNewShortURL };
