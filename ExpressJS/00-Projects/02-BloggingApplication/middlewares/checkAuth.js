const { validateToken } = require("../utils/authentication");

const checkAuthentication = (cookieName) => {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) return next();

    const userPayload = validateToken(tokenCookieValue);
    if (!userPayload) return next();

    req.user = userPayload;
    next();
  };
};

module.exports = { checkAuthentication };
