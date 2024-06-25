const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET_KEY;

function setUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    name: user.name,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

function getUser(token) {
  try {
    // verify token and return decoded user
    return jwt.verify(token, secret);
  } catch {
    // else falsy
    return null;
  }
}

module.exports = { setUser, getUser };
