const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

// code for creating user, hashing password and saving user info
app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

// to actually authenticate user
app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) return res.status(400).send("User does not exist");

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Logged In!");
    } else {
      res.send("Incorrect Password!");
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
