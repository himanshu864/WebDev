const express = require("express");
const router = express.Router();
const { handleAnalytics } = require("../controllers/analytics");

router.get("/:id", handleAnalytics);

module.exports = router;
