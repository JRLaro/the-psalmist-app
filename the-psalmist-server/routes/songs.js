const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const auth = require("../middleware/auth");
const User = require("../models/User");
const Song = require("../models/Song");

// get user's songs. Private access.
router.get("/", auth, async (req, res) => {
  try {
    const songs = await Song.find({ user: req.user.id }).sort({ date: -1 });
    res.json(songs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error.");
  }
});

// add a new song. Private access. 
router.post("/", auth, async (req, res) => {
  const {
    songId,
    title,
    body,
    isArchived,
    ownerId,
    collaborators,
    notes,
    songKey,
    tempo,
    audio,
    dateUpdated,
    dateCreated,
  } = req.body;

  try {
    const newSong = new Song({
      user: req.user.id,
      songId,
      title,
      body,
      isArchived,
      ownerId,
      collaborators,
      notes,
      songKey,
      tempo,
      audio,
      dateUpdated,
      dateCreated,
    });

    const song = await newSong.save()
    res.json(song);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error.");
  }
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
