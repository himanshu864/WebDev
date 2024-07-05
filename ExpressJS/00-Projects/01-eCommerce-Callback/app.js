require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const { createOrder } = require("./routes/createOrder.js");

const items = [
  {
    name: "Sony WH-1000XM4",
    price: 19990,
    image: "https://m.media-amazon.com/images/I/51DkbWZIg+L._SL1500_.jpg",
    alt: "xm4",
  },
  {
    name: "RK ROYAL KLUDGE RK68",
    price: 12081,
    image: "https://m.media-amazon.com/images/I/61MbLfXHInS._SL1500_.jpg",
    alt: "rk68",
  },
  {
    name: "Spring Snow by Yukio Mishima",
    price: 361,
    image: "https://m.media-amazon.com/images/I/710B2qTOD6L._SL1500_.jpg",
    alt: "mishima",
  },
];

app.get("/", (req, res) => {
  return res.render("homeGPT.ejs", { items });
});

app.get("/cart", (req, res) => {
  const items = req.cookies?.cart;
  let totalPrice = 0;
  if (items) {
    items.forEach((item) => {
      totalPrice = item.price * item.quantity;
    });
  }
  res.render("cartGPT.ejs", { items, totalPrice });
});

app.post("/createOrder", createOrder);

app.post("/addToCart", (req, res) => {
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
    res.cookie("cart", items);
  } else {
    res.cookie("cart", [obj]);
  }

  res.redirect("/");
});

app.listen(3000);
