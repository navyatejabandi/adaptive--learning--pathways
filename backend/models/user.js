const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  goals: [String],
});

module.exports = mongoose.model("User", userSchema);