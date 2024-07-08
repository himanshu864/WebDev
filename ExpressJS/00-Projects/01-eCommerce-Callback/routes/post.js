const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/createOrder.js");
const { verifyPayment } = require("../controllers/verifyPayment.js");
const { addToCart } = require("../controllers/addToCart.js");
const { removeOne } = require("../controllers/RemoveOne.js");

router.post("/createOrder", createOrder);
router.post("/addToCart", addToCart);
router.post("/removeOne", removeOne);
router.post("/verifyPayment", verifyPayment);

module.exports = router;
