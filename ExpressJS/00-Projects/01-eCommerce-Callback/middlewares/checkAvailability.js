const availableStock = require("../utils/stock").availableStock;

const checkAvailability = (req, res, next) => {
  const items = req.cookies.cart;

  if (!items || !Array.isArray(items)) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Cart is empty or not in the expected format.",
      });
  }

  for (const item of items) {
    if (item.quantity > availableStock[item.name]) {
      return res
        .status(400)
        .json({
          success: false,
          message: `Insufficient stock for ${item.name}`,
        });
    }
  }

  next();
};

module.exports = { checkAvailability };
