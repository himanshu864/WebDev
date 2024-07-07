const { items } = require("../utils/items");

const homePage = (req, res) => {
  return res.render("home.ejs", { items });
};

module.exports = { homePage };
