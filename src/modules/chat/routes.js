const express = require('express');
const { AzureOpenAI } = require('openai');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Azure OpenAI configuration
const client = new AzureOpenAI({
  apiKey: process.env.OPEN_AI_SECRET, 
  apiVersion: "2024-05-01-preview",
  baseURL: process.env.OPEN_AI_ENDPOINT, 
});

router.post('/', async (req, res) => {
  try {
    const userInput = req.body.message;

    const result = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: userInput },
      ],
      model: process.env.DEPLOY_ID, 
    });

    const response = result.choices[0].message.content;
    res.json({ response });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
});

module.exports = router;
