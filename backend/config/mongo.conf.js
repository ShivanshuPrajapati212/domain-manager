const mongoose = require("mongoose");

const connectToMongo = () => {
  try {
    mongoose.connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Connected to MongoDB");
      }).catch(() => {
        console.log("Failed to connect in MongoDB");
      });
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = connectToMongo;
