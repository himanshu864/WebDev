const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/createOrder.js");
const { addToCart } = require("../controllers/addToCart.js");

router.post("/createOrder", createOrder);
router.post("/addToCart", addToCart);

module.exports = router;
