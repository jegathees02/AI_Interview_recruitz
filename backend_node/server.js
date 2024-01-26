const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');
const authRoutes = require('./router/authRoutes/signup');
// const chatgptRoutes = require('./router/gpt/chatgpt')
const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURI = "mongodb+srv://recruitz_softflow:recruitz_softflow@recruitzmain.lbunv4c.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());
// app.use('/gpt',chatgptRoutes);
app.use('/',authRoutes);

const openai = new OpenAI({ apiKey: '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' });
app.post('/generate-questions', async (req, res) => {
  //   const userMessage = "Create a list of 8 questions for an interview with a science fiction author.";
  
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Create a list of 5 basic questions for an interview with java skills  " },
          // { role: "user", content: userMessage },
        ],
        temperature: 0.5,
          max_tokens: 64,
          top_p: 1,
      });
  
      const assistantReply = response.choices[0].message.content;
      res.json({ questions: assistantReply.split('\n') });
    } catch (error) {
      console.error('OpenAI API error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');

});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
