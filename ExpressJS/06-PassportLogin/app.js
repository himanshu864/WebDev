const express = require("express");
const session = require("express-session");
const flash = require("express-flash"); // display message errors
const methodOverride = require("method-override"); // delete request using html

const passport = require("passport");
const bcrypt = require("bcrypt");
const app = express();

// Example Database
const users = [];

// Configure Passport
const initializePassport = require("./passport-config.js");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

// Middlewares
app.set("view-engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: "shhhh, very secret",
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    cookie: {
      maxAge: 60000, // session lasts 1 minute
    },
  })
);
app.use(passport.initialize()); // setup basics
app.use(passport.session()); // persist variables across the entire session of user
app.use(methodOverride("_method"));

// Auth Middlewares
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return res.redirect("/");
  next();
}

// Static routes
app.get("/", checkAuthenticated, (req, res) => {
  res.render("index.ejs", { name: req.user.name });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

// POST routes
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Optional email duplicacy check
  const user = users.find((user) => user.email == email);
  if (user) {
    return res.render("register.ejs", {
      msg: `<div class="error">User already exists</div> `,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
  });
  return res.render("login.ejs", {
    msg: `<div class="success">User successfully created</div> `,
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.delete("/logout", (req, res) => {
  req.logOut(() => {});
  res.redirect("/login");
});

app.listen(3000);
