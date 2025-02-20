const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: {
    degree: String,
    branch: String,
    institution: String,
    year: String,
  },
  experience: {
    job_title: String,
    company: String,
    start_date: String,
    end_date: String,
  },
  summary: String,
  skills: [{type:String}],
});
const Applicant = mongoose.model("Applicant", ApplicantSchema);
module.exports = Applicant;
