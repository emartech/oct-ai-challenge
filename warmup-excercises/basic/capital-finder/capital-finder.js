import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://ai.company.internal/v1',
  apiKey: 'not-needed'
});

const response = await client.chat.completions.create({
  model: 'gpt-4',
  messages: [
    {
      role: 'system',
      content: 'You are a geography expert. Your task is to provide the capital city of any country asked. Respond only with the city name.'
    },
    {
      role: 'user',
      content: 'France'
    }
  ]
});

const result = response.choices[0].message.content;
console.log(result);