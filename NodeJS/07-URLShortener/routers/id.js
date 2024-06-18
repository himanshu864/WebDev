const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const URL = require("../models/urlModel");

router.get("/:id", async (req, res) => {
  const shortID = req.params.id;

  const entry = await URL.findOneAndUpdate(
    { shortID },
    {
      $push: { visitedHistory: { timestamp: Date.now() } },
    }
  );
  return res.redirect(entry.redirectURL);
});

module.exports = router;
