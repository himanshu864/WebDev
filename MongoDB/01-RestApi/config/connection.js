const mongoose = require("mongoose");
const asyncHandler = require("../utils/asyncHandler");

const connectMongoDB = asyncHandler(async (url) => {
  await mongoose.connect(url);
  console.log("Connected to MongoDB successfully!");
});

module.exports = { connectMongoDB };
