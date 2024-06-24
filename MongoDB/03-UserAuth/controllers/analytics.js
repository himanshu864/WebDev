const URL = require("../models/urlModel");
const asyncHandler = require("../utils/asyncHandler");

const handleAnalytics = asyncHandler(async (req, res) => {
  const shortID = req.params.id;
  const result = await URL.findOne({ shortID });
  res.json({
    totalClicks: result.visitedHistory.length,
    analytics: result.visitedHistory,
  });
});

module.exports = { handleAnalytics };
