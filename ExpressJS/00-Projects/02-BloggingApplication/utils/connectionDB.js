const mongoose = require("mongoose");

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectMongoDB(uri) {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.log("Something went wrong while connecting to MongoDB!");
    await mongoose.disconnect();
  }
}

module.exports = connectMongoDB;
