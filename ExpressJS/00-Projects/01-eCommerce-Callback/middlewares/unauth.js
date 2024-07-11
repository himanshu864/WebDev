const { getUser } = require("../utils/tokenizer.js");

function restrictUnauthenticated(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.render("login", { error: "Authentication Required!" });

  const user = getUser(token);
  if (!user) return res.render("login", { error: "Invalid Token!" });

  req.user = user;
  next();
}

module.exports = {
  restrictUnauthenticated,
};
