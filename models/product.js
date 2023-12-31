const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      text: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: String,
    },
    color: {
      type: String,
    },
    brand: {
      type: String,
      enum: ["Apple", "Fitbit", "Garmin", "GoogleFit", "Samsung"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
