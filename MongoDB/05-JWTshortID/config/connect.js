const mongoose = require("mongoose");

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectMongoDB(uri) {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.log("Looks like an oopsy happend :/");
    await mongoose.disconnect();
  }
  // finally {
  //   // Ensures that the client will close when you finish/error
  //   await mongoose.disconnect();
  // }
}

module.exports = connectMongoDB;
