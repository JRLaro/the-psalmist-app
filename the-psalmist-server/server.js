const env = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

// Connect Database
connectDB();
const app = express();

// allow us to accept data/ allows the body to receive data
app.use(express.json({ extended: false }));


app.get("/home", (req, res) => {
  res.send("The Psalmist");
  return console.log("Hello World");
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/songs", require("./routes/songs"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
