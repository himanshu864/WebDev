const mongoose = require("mongoose");
const User = require("../models/user");

const checkConnection = (req, res, next) => {
  // 1 means connected
  if (mongoose.connection.readyState !== 1)
    return res.status(500).json({ error: "Database Connection Problem" });

  // Check if Model connected
  try {
    User.find({});
    next();
  } catch (error) {
    res.status(500).json({ error: "Database Connection Problem" });
  }
};

module.exports = checkConnection;
