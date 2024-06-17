const mongoose = require("mongoose");

const connectMongoDB = async (url) => mongoose.connect(url);

module.exports = { connectMongoDB };
