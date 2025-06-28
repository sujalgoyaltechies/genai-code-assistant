// backend/openaiService.js
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateCode(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // You can also use "gpt-4" or "gpt-4o"
      messages: [
        { role: "system", content: "You are a helpful coding assistant." },
        { role: "user", content: prompt },
      ],
      max_tokens: 800,
      temperature: 0.5,
    });

    return completion.choices[0].message.content;

  } catch (error) {
    console.error("OpenAI API error:", error);
    throw error;
  }
}

module.exports = generateCode;
