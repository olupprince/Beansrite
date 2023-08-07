const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  food: { type: String, required: true },
  price: { type: String, required: true },
});

const post = mongoose.model("post", postSchema);
