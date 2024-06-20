const URL = require("../models/urlModel");
const asyncHandler = require("../utils/asyncHandler");

const handleRedirectURL = asyncHandler(async (req, res) => {
  const shortID = req.params.id;
  const entry = await URL.findOneAndUpdate(
    { shortID },
    {
      $push: { visitedHistory: { timestamp: Date.now() } },
    }
  );
  res.redirect("https://" + entry.redirectURL);
});

module.exports = { handleRedirectURL };
