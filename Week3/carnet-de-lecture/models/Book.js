const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Le titre est obligatoire"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "L'auteur est obligatoire"],
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
      default: "",
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    status: {
      type: String,
      enum: ["a-lire", "en-cours", "termine"],
      default: "a-lire",
    },
    review: {
      type: String,
      trim: true,
      default: "",
    },
    coverUrl: {
      type: String,
      trim: true,
      default: "",
    },
    coverImage: {
      type: String,
      default: "",
    },
    finishedDate: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
