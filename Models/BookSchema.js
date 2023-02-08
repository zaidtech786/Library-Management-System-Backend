
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    Quantity: {
      type: Number,
      required: true,
    },
    bookName: {
      type: String,
      required: true,
    },
    bookLang: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const BookData = new mongoose.model("BookData", bookSchema);
module.exports = BookData;
