const mongoose = require("mongoose");

const BudgetSchema = mongoose.Schema({
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
        type: string,
      },
    ],
    interlude: [
      {
        type: string,
      },
    ],
    verse: [
      {
        type: string,
      },
    ],
    preChorus: [
      {
        type: string,
      },
    ],
    chorus: [
      {
        type: string,
      },
    ],
    bridge: [
      {
        type: string,
      },
    ],
    vamp: [
      {
        type: string,
      },
    ],
    postlude: [
      {
        type: string,
      },
    ],
    outro: [
      {
        type: string,
      },
    ],
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  ownerId: {
    type: String,
    required: true,
  },
  collaborators: [
    {
      userId: {
        type: String,
      },
      permissions: [
        {
          type: String,
        },
      ],
    },
  ],
  notes: {
    type: String,
  },
  songKey: {
    type: String,
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
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("budget", BudgetSchema);
