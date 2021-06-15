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

    const song = await newSong.save();
    res.json(song);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error.");
  }
});

// update a song. Private route
router.put("/:id", auth, async (req, res) => {
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

  // song object
  const songFields = {};

  if (songId) songFields.songId = songId;
  if (title) songFields.title = title;
  if (body) songFields.body = body;
  if (isArchived) songFields.isArchived = isArchived;
  if (ownerId) songFields.ownerId = ownerId;
  if (collaborators) songFields.collaborators = collaborators;
  if (notes) songFields.notes = notes;
  if (songKey) songFields.songKey = songKey;
  if (tempo) songFields.tempo = tempo;
  if (audio) songFields.audio = audio;
  if (dateUpdated) songFields.dateUpdated = dateUpdated;
  if (dateCreated) songFields.dateCreated = dateCreated;

  try {
    let song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ msg: "Song not found" });

    // make sure the user owns the song
    if (song.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not Authorized." });

    // Update the song
    song = await Song.findByIdAndUpdate(
      req.params.id,
      { $set: songFields },
      { new: true }
    );

    res.json(song);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// delete a song. Private route.
router.delete("/:id", auth, async (req, res) => {
  try {
    let song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ msg: "Song not found." })

    // Make sure the user owns the song
    if (song.user.toString() !== req.user.id)
    return res.status(401).json({ msg: "Not Authorized." });

    // Delete the song
    song = await Budget.findByIdAndRemove(req.params.id)
    res.json({msg:"Song Removed."});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error.");
  }
});

module.exports = router;
