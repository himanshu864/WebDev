const mongoose = require("mongoose");

async function connectMongoDB(url) {
  console.log("Connecting to MongoDB...");
  return mongoose.connect(url);
}

module.exports = connectMongoDB;
