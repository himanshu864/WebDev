const cartPage = (req, res) => {
  const items = req.cookies?.cart;

  let totalPrice = 0;
  if (items) {
    items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
  }

  res.render("cart.ejs", { items, totalPrice });
};

module.exports = { cartPage };
