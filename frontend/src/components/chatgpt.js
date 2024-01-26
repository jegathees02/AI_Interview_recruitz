// import React from 'react';

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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',
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "user",
      "content": "Create a list of 8 questions for an interview with a science fiction author."
    }
  ],
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1,
});