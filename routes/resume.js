const express = require("express");
const router = express.Router();
const Applicant = require("../models/Applicant");
const authMiddleware = require("../middleware/middleware");
require("dotenv").config();
const aiModel = require("../services/ai");
router.post("/", authMiddleware, async (req, res) => {
  const { raw_text } = req.body;
  if (!raw_text) return res.status(404).json({ error: "No raw text given" });
  try {
    const jsonResult = await aiModel.generateContent(raw_text);
    const resData = await jsonResult.response.text();
    const generatedData = JSON.parse(resData);
    console.log(generatedData[0]);
    const newApplicant = new Applicant(generatedData[0]);
    await newApplicant.save();
    return res
      .status(200)
      .json({ message: "Resume Enriched Successfully", data: newApplicant });
  } catch (err) {
    console.error("Error processing resume:", err);
    return res.status(500).json({ error: "Error processing resume" });
  }
});
module.exports = router;
