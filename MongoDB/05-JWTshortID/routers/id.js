const express = require("express");
const router = express.Router();
const { handleRedirectURL } = require("../controllers/redirect");

router.get("/:id", handleRedirectURL);

module.exports = router;
