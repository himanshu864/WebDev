const handleUserLogout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};

module.exports = { handleUserLogout };
