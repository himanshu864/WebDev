const cartPage = (req, res) => {
  const items = req.cookies?.cart;

  let desc = "";
  let totalPrice = 0;

  if (items) {
    items.forEach((item) => {
      totalPrice += item.price * item.quantity;
      desc += " : " + item.quantity + " x " + item.name;
    });
  }

  res.render("cart.ejs", { items, totalPrice, desc });
};

module.exports = { cartPage };
