const { items } = require("../utils/items");
const { getUser } = require("../utils/tokenizer.js");

const homePage = (req, res) => {
  const cartItems = req.cookies?.cart;

  // Check Authentication
  const token = req.cookies?.token;
  if (!token) return res.render("home.ejs", { items });

  const user = getUser(token);
  if (!user) return res.render("home.ejs", { items });

  return res.render("home.ejs", {
    items,
    cartNo: cartItems?.length,
    user,
  });
};

module.exports = { homePage };
