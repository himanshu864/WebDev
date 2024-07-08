const { items } = require("../utils/items");

const homePage = (req, res) => {
  const cartItems = req.cookies?.cart;
  return res.render("home.ejs", { items, cartNo: cartItems?.length });
};

module.exports = { homePage };
