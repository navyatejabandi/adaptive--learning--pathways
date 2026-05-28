const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
  topic: String,
});

module.exports = mongoose.model("Quiz", quizSchema);