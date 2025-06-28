// backend/index.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const generateCode = require("./openaiService");
const { commitCode } = require("./gitService");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;
  const code = await generateCode(prompt);
  const filename = `../generated_code/generated_${Date.now()}.js`;
  fs.writeFileSync(filename, code);
  await commitCode();
  res.json({ message: "Code generated", code });
});

app.listen(5000, () => console.log("Server running on port 5000"));
