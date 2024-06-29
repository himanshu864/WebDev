const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const session = require("express-session");

// Example Database
const users = [];

app.set("view-engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: "shhhh, very secret",
    cookie: {
      maxAge: 60000, // session lasts 1 minute
    },
  })
);

// Static routes
app.get("/", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("index.ejs", { user: req.session.user.name });
});

app.get("/login", (req, res) => {
  if (req.session.user) return res.redirect("/");
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  if (req.session.user) return res.redirect("/");
  res.render("register.ejs");
});

// POST routes
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users[email] = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
  };
  return res.render("login.ejs", {
    msg: `<div class="success">User successfully created</div> `,
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users[email];

  if (!user)
    return res.render("login.ejs", {
      msg: `<div class="error">Username doesn't exist</div>`,
    });

  if (!bcrypt.compareSync(password, user.password))
    return res.render("login.ejs", {
      msg: `<div class="error">Invalid Password</div> `,
    });

  req.session.user = user;
  res.redirect("/");
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.listen(3000);
