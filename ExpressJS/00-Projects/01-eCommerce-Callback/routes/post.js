const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/createOrder.js");
const { addToCart } = require("../controllers/addToCart.js");
const { verifyPayment } = require("../controllers/verifyPayment.js");

router.post("/createOrder", createOrder);
router.post("/addToCart", addToCart);
router.post("/verifyPayment", verifyPayment);

module.exports = router;
