const mongoose = require("mongoose");

const SongSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // name of the collection you want to refer to in the database
  },

  songId: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  body: {
    intro: [
      {
        type: String,
        required: false,
      },
    ],
    interlude: [
      {
        type: String,
        required: false,
      },
    ],
    verse: [
      {
        type: String,
        required: false,
      },
    ],
    preChorus: [
      {
        type: String,
        required: false,
      },
    ],
    chorus: [
      {
        type: String,
        required: false,
      },
    ],
    bridge: [
      {
        type: String,
        required: false,
      },
    ],
    vamp: [
      {
        type: String,
        required: false,
      },
    ],
    postlude: [
      {
        type: String,
        required: false,
      },
    ],
    outro: [
      {
        type: String,
        required: false,
      },
    ],
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  ownerId: {
    type: String,
    required: false,
  },
  collaborators: [
    {
      userId: {
        type: String,
        required: false,
      },
      permissions: [
        {
          type: String,
          required: false,
        },
      ],
    },
  ],
  notes: {
    type: String,
    required: false,
  },
  songKey: {
    type: String,
    required: false,
  },
  tempo: {
    type: Number,
    required: false,
  },
  audio: [
    {
      audioId: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: false,
      },
      key: {
        type: String,
        required: false,
      },
      recording: {
        type: BSONBinary,
        required: false,
      },
      dateCreated: {
        type: Date,
        default: Date.now(),
      },
      length: {
        type: Number,
        required: false,
      },
      md5: {
        type: String,
        required: false,
      },
      fileName: {
        type: String,
        required: false,
      },
      isArchived: {
        type: Boolean,
        default: false,
      },
      archivedOn: {
        type: Date,
        default: Date.now(),
      },
    },
  ],

  dateUpdated: {
    type: Date,
    required: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("song", SongSchema);
