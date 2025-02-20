const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/middleware");
const Applicant = require("../models/Applicant");

// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { name } = req.body;
//     if (!name) return res.status(400).json({ error: "Name is required" });

//     const records = await Applicant.find({ name: new RegExp(name, "i") })
//       .select("name email education experience summary skills")
//       .exec();

//     res.json(records);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const records = await Applicant.find({
      name: new RegExp(name, "i"),
    }).exec();

    const reorderedRecords = records.map((record) => {
      return {
        name: record.name,
        email: record.email,
        education: record.education,
        experience: record.experience,
        summary: record.summary,
        skills: record.skills,
        Soni,
      };
    });

    res.json(reorderedRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
