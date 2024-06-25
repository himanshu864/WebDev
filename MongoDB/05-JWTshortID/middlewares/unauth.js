const { getUser } = require("../utils/hashmap.js");

async function restrictUnauthenticated(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.render("login", { error: "Authentication Required!" });

  try {
    const user = getUser(token);
    if (!user) return res.render("login", { error: "Invalid Token!" });

    req.user = user;
    next();
  } catch {
    return res.render("login", { error: "Authentication Failed!" });
  }
}

module.exports = { restrictUnauthenticated };
