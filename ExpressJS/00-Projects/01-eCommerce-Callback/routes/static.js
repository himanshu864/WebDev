const express = require("express");
const router = express.Router();

const { homePage } = require("../controllers/homePage");
const { cartPage } = require("../controllers/cartPage");

router.get("/", homePage);
router.get("/cart", cartPage);

module.exports = router;
