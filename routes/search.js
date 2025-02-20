const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/middleware");
const Applicant = require("../models/Applicant");

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const records = await Applicant.find({ name: new RegExp(name, "i") })
      .select("name")
      .exec();
    if (records.length === 0) {
      return res.status(404).json({ error: "Couldn't find any records" });
    }
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//TO RETURN ALL RECORDS IN ORDER :

// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { name } = req.body;
//     if (!name) return res.status(400).json({ error: "Name is required" });

//     const records = await Applicant.find({
//       name: new RegExp(name, "i"),
//     }).exec();

//     const reorderedRecords = records.map((record) => {
//       return {
//         name: record.name,
//         email: record.email,
//         education: record.education,
//         experience: record.experience,
//         summary: record.summary,
//         skills: record.skills,
//       };
//     });

//     res.json(reorderedRecords);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = router;
