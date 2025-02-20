const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const USERNAME = "naval.ravikant";
const PASSWORD = "05111974";

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (username !== USERNAME || password !== PASSWORD) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(200).json({ JWT: token });
});
module.exports = router;
