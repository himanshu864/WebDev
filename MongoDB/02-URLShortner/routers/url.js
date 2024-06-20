const express = require("express");
const { handleGenNewShortURL } = require("../controllers/postUrl");
const router = express.Router();

router.post("/", handleGenNewShortURL);

module.exports = router;
