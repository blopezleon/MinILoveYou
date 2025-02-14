require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generate", async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{role: "system", content:"You are a funny and romantic boyfriend named Bernie with a basic vocabulary and a girlfriend named Min."},{ role: "user", content: "Write Min a short love letter no longer than 3 sentences that ties in a loving message and a funny joke. Make sure that while the message is still funny its also heart felt." }],
            max_tokens: 100,
        });

        res.json({ letter: completion.choices[0].message.content.trim() });
    } catch (error) {
        console.error("Error generating love letter:", error);
        res.status(500).json({ error: "Failed to generate love letter" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
