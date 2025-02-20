require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const searchRoute = require("./routes/search");
const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

const resumeRoute = require("./routes/resume");
app.use("/api/resume", resumeRoute);

app.use("/api/login", authRoute);
app.use("/api/search", searchRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error", err));

app.get("/", (req, res) => {
  res.send("App is running");
});
app.listen(PORT, (req, res) => {
  console.log("Listening on Port:", PORT);
});
