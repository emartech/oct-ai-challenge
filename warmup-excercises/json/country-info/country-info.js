import OpenAI from 'openai';
import { z } from 'zod';
import { zodResponseFormat } from 'openai/helpers/zod';

const client = new OpenAI({
  baseURL: 'https://ai.company.internal/v1',
  apiKey: 'not-needed'
});

const CountryCapital = z.object({
  country: z.string(),
  capital: z.string(),
  population: z.number(),
  continent: z.string()
});

const response = await client.beta.chat.completions.parse({
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Give me information about France' }
  ],
  response_format: zodResponseFormat(CountryCapital, 'country_info')
});

const result = response.choices[0].message.parsed;
console.log(`Country: ${result.country}`);
console.log(`Capital: ${result.capital}`);
console.log(`Population: ${result.population}`);
console.log(`Continent: ${result.continent}`);