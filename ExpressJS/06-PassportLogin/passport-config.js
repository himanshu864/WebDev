const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// LocalStrategy is used to authenticate users with a username and password.
function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = (email, password, done) => {
    const user = getUserByEmail(email);
    if (!user) return done(null, false, { message: "No user with that email" });

    try {
      if (!bcrypt.compareSync(password, user.password))
        return done(null, false, { message: "Password Incorrect" });
    } catch (err) {
      return done(err);
    }
    return done(null, user);
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user, done) => {
    return done(null, user.id); // store user in session. Identified by id or email
  });
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id)); // retrieve user from session store
  });
}

module.exports = initialize;
