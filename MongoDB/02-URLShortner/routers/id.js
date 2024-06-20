const express = require("express");
const { handleRedirectURL } = require("../controllers/redirect");
const router = express.Router();

router.get("/:id", handleRedirectURL);

module.exports = router;
