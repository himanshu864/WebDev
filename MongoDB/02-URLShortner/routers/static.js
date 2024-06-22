const express = require("express");
const router = express.Router();
const handleStatic = require("../controllers/static");

router.get("/", handleStatic);

module.exports = router;
