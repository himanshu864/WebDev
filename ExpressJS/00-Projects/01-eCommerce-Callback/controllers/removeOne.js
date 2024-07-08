const removeOne = (req, res) => {
  if (req.cookies?.cart) {
    const items = req.cookies.cart;
    const index = items.findIndex((item) => item.name == req.body.name);

    if (index != -1 && --items[index].quantity == 0) {
      items.splice(index, 1);
    }

    res.cookie("cart", items, { maxAge: 99999999 });
    res.redirect("/cart");
  }
};

module.exports = { removeOne };
