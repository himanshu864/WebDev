const { nanoid } = require("nanoid");
const URL = require("../models/urlModel");

// const asyncHandler = require("../utils/asyncHandler");

const handleGenNewShortURL = async (req, res) => {
  const shortID = nanoid(8);
  const body = req.body.url;
  if (!body) return res.status(400).json({ error: "URL required" });
  // need to manually handle is email not unique error
  await URL.create({
    shortID: shortID,
    redirectURL: body,
    visitedHistory: [],
  });

  return res.json({ shortID: shortID });
};

module.exports = { handleGenNewShortURL };
