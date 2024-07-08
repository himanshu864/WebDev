const addToCart = (req, res) => {
  const { name, price, image, quantity } = req.body;
  const obj = { name, price, image, quantity };

  if (req.cookies?.cart) {
    const items = req.cookies.cart;
    const index = items.findIndex((item) => item.name == name);
    if (index == -1) {
      items.push(obj);
    } else {
      items[index].quantity = Number(items[index].quantity) + Number(quantity);
    }
    res.cookie("cart", items, { maxAge: 99999999 });
  } else {
    res.cookie("cart", [obj], { maxAge: 99999999 });
  }

  if (!image) return res.redirect("/cart");
  res.redirect("/");
};

module.exports = { addToCart };
