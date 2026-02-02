require("dotenv").config();
const express = require("express");
const connectToMongo = require("./config/mongo.conf.js");


connectToMongo();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send("Oh hell yeah");
});

app.use("/auth", require("./routes/auth.route.js"));

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
