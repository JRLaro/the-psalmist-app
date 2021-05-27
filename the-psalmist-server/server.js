const env = require("dotenv").config();
const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("The Psalmist");
  return console.log("Hello World");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
