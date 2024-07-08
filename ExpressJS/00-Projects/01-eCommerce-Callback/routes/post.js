const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/createOrder");
const { clearCart } = require("../controllers/clearCart");
const { addToCart } = require("../controllers/addToCart");
const { removeOne } = require("../controllers/removeOne");

const { checkAvailability } = require("../middlewares/checkAvailability");

router.post("/createOrder", checkAvailability, createOrder);
router.post("/addToCart", addToCart);
router.post("/removeOne", removeOne);
router.post("/clearCart", clearCart);

module.exports = router;
