const { getUser } = require("../utils/tokenizer.js");

function restrictUnauthenticated(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.render("login", { error: "Authentication Required!" });

  const user = getUser(token);
  if (!user) return res.render("login", { error: "Invalid Token!" });

  req.user = user;
  next();
}

function restrictUnauthorized(req, res, next) {
  if (req.user.role != "ADMIN") return res.end("Unauthorized");
  next();
}

function restrictAdminSignup(req, res, next) {
  if (req.query.role == "admin") {
    restrictUnauthenticated(req, res, function () {
      restrictUnauthorized(req, res, next);
    });
  } else {
    next();
  }
}

module.exports = {
  restrictUnauthenticated,
  restrictUnauthorized,
  restrictAdminSignup,
};
