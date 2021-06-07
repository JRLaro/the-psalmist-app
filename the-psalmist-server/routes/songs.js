const express = require("express");
const router = express.Router();

// get user's songs
router.get("/", (req, res) => {
  res.send("Get user songs");
});

// add a new song
router.post("/", (req, res) => {
  res.send("Add a song");
});

// update a song
router.put("/:id", (req, res) => {
  res.send("update a song");
});

// delete a song
router.delete("/:id", (req, res) => {
  res.send("delete a song");
});

module.exports = router;
