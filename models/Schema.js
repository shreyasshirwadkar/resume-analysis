const SchemaType = {
  STRING: "string",
  OBJECT: "object",
  ARRAY: "array",
};

const schema = {
  description: "List of applicants",
  type: SchemaType.ARRAY,
  items: {
    type: SchemaType.OBJECT,
    properties: {
      name: {
        type: SchemaType.STRING,
        description: "Name of the applicant",
        nullable: false,
      },
      email: {
        type: SchemaType.STRING,
        description: "Email address of the applicant",
        nullable: false,
      },
      education: {
        type: SchemaType.OBJECT,
        description: "Educational background",
        properties: {
          degree: { type: SchemaType.STRING, description: "Degree obtained" },
          branch: { type: SchemaType.STRING, description: "Branch of study" },
          institution: {
            type: SchemaType.STRING,
            description: "Name of the institution",
          },
          year: { type: SchemaType.STRING, description: "Year of completion" },
        },
      },
      experience: {
        type: SchemaType.OBJECT,
        description: "Work experience",
        properties: {
          job_title: { type: SchemaType.STRING, description: "Job title" },
          company: { type: SchemaType.STRING, description: "Company name" },
          start_date: { type: SchemaType.STRING, description: "Start date" },
          end_date: { type: SchemaType.STRING, description: "End date" },
        },
      },
      summary: {
        type: SchemaType.STRING,
        description: "Brief summary about the applicant",
      },
      skills: {
        type: SchemaType.ARRAY,
        description: "List of skills",
        items: { type: SchemaType.STRING },
      },
    },
    required: ["name", "email"],
  },
};

module.exports = schema;
