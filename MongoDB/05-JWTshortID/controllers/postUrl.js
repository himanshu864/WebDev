const { nanoid } = require("nanoid");
const validURL = require("valid-url");
const URL = require("../models/urlModel");

const asyncHandler = require("../utils/asyncHandler");

const handleGenNewShortURL = asyncHandler(async (req, res) => {
  const body = req.body.url;
  let data = await URL.find({ createdBy: req.user._id });

  if (!validURL.isHttpsUri(body))
    return res.render("home", {
      name: req.user.name,
      data,
      error: "Invalid URL",
    });

  const shortID = nanoid(8);
  await URL.create({
    shortID: shortID,
    redirectURL: body,
    visitedHistory: [],
    createdBy: req.user._id,
  });

  data = await URL.find({ createdBy: req.user._id });
  return res.render("home", { name: req.user.name, data, shortID });
});

module.exports = { handleGenNewShortURL };
