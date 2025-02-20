const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const schema = require("../models/Schema");

const aiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: schema,
  },
});

module.exports = aiModel;
