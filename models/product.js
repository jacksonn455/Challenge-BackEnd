const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
    select: false
  },
  category: {
    type: String,
    required: true,
    select: false
  },
  value:{
      type: Number,
        required: true,
  }
});

module.exports = mongoose.model("Product", Product);
