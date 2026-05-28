const express = require("express");
const router = express.Router();
const Goal = require("../models/Goal");


// Get all goals
router.get("/", async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Add new goal
router.post("/", async (req, res) => {
  try {
    const newGoal = new Goal(req.body);
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Get goal by ID
router.get("/:id", async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    res.json(goal);
  } catch (error) {
    res.status(404).json({ message: "Goal not found" });
  }
});

module.exports = router;