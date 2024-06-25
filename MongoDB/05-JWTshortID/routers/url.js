const express = require("express");
const router = express.Router();
const { handleGenNewShortURL } = require("../controllers/postUrl");

router.post("/", handleGenNewShortURL);

module.exports = router;
