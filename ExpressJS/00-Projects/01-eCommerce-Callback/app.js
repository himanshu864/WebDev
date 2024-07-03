require("dotenv").config();
const express = require("express");
const app = express();

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { createOrder } = require("./routes/order.js");
const { addToCart } = require("./routes/addToCart.js");

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

let globalNumber = 10;

app.get("/", (req, res) => {
  return res.render("home.ejs", { items, number: globalNumber });
});

app.get("/cart", (req, res) => {
  res.render("cart.ejs", { number: globalNumber });
});

app.post("/createOrder", createOrder);

app.post("/addToCart", addToCart);

app.listen(3000);
