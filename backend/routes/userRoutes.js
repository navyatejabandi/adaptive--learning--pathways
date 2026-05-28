const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "Email already registered. Please sign in." });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name: name || email.split("@")[0], email, password: hashed });
    await user.save();

    res.status(201).json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "No account found. Please sign up first." });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Incorrect password." });

    res.json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
