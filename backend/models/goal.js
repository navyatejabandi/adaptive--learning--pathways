const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  roadmap: [
    {
      topic: String,
      videoLink: String,
      difficulty: String
    }
  ]
});

module.exports = mongoose.model("Goal", goalSchema);