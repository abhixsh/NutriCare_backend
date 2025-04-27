const express = require('express');
const cors = require('cors');
const { OpenAIClient } = require("@azure/openai");
const { AzureKeyCredential } = require("@azure/core-auth");
const dotenv = require('dotenv');
const chatRouter = require('./src/modules/chat/routes');

dotenv.config();

console.log("OPEN_AI_ENDPOINT:", process.env.OPEN_AI_ENDPOINT);
console.log("OPEN_AI_SECRET:", process.env.OPEN_AI_SECRET);
console.log("DEPLOY_ID:", process.env.DEPLOY_ID);

const app = express();
const recipeRouter = require('./src/modules/recipe/routes');
const doctorRouter = require('./src/modules/doctor/routes');
const articleRouter = require('./src/modules/article/routes');
const userRouter = require('./src/modules/user/routes');

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const OPEN_AI_ENDPOINT = process.env.OPEN_AI_ENDPOINT;
const OPEN_AI_SECRET = process.env.OPEN_AI_SECRET;
const DEPLOY_ID = process.env.DEPLOY_ID;

const client = new OpenAIClient(
    OPEN_AI_ENDPOINT,
    new AzureKeyCredential(OPEN_AI_SECRET)
);

app.post('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use('/recipe', recipeRouter);
app.use('/article', articleRouter);
app.use('/doctor', doctorRouter);
app.use('/user', userRouter);
app.use('/chat', chatRouter);

app.post('/ask-bot', async (req, res) => {
    try {
        const result = await client.getChatCompletions(DEPLOY_ID, req.body);
        res.send(result.choices[0].message);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
});

module.exports = app;
