const express = require("express");
const router = express.Router();
const Quiz = require("../models/quiz");


// Get all quiz questions
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Add quiz question
router.post("/", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Get quiz by topic
router.get("/topic/:topic", async (req, res) => {
  try {
    const quizzes = await Quiz.find({ topic: req.params.topic });
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;