# JSON Structured Output

Master structured data handling by forcing AI models to return JSON in a specific format.

## Examples

<details>
<summary>OpenAI SDK Python</summary>

```python
from openai import OpenAI
from pydantic import BaseModel

client = OpenAI(
    base_url="https://ai.company.internal/v1",
    api_key="not-needed"
)

class CountryCapital(BaseModel):
    country: str
    capital: str
    population: int
    continent: str

response = client.beta.chat.completions.parse(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Give me information about France"}
    ],
    response_format=CountryCapital
)

result = response.choices[0].message.parsed
print(f"Country: {result.country}")
print(f"Capital: {result.capital}")
print(f"Population: {result.population}")
print(f"Continent: {result.continent}")
```

</details>

<details>
<summary>OpenAI SDK JavaScript</summary>

```javascript
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
```

</details>

<details>
<summary>cURL</summary>

```bash
curl https://ai.company.internal/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4",
    "messages": [
      {
        "role": "user",
        "content": "Give me information about France"
      }
    ],
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "country_info",
        "strict": true,
        "schema": {
          "type": "object",
          "properties": {
            "country": {"type": "string"},
            "capital": {"type": "string"},
            "population": {"type": "integer"},
            "continent": {"type": "string"}
          },
          "required": ["country", "capital", "population", "continent"],
          "additionalProperties": false
        }
      }
    }
  }' | jq '.choices[0].message.content | fromjson'
```

</details>

<details>
<summary>LangChain Python</summary>

```python
from langchain.llms import Custom
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field

class CountryCapital(BaseModel):
    country: str = Field(description="Name of the country")
    capital: str = Field(description="Capital city")
    population: int = Field(description="Population count")
    continent: str = Field(description="Continent name")

llm = Custom(endpoint="https://ai.company.internal/v1/chat")
parser = PydanticOutputParser(pydantic_object=CountryCapital)

prompt = f"Give me information about France.\n{parser.get_format_instructions()}"
response = llm.invoke(prompt)
result = parser.parse(response)

print(f"Country: {result.country}")
print(f"Capital: {result.capital}")
print(f"Population: {result.population}")
print(f"Continent: {result.continent}")
```

</details>

<details>
<summary>LangChain JavaScript</summary>

```javascript
import { ChatOpenAI } from "langchain/chat_models/openai";
import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";

const CountryCapital = z.object({
  country: z.string().describe("Name of the country"),
  capital: z.string().describe("Capital city"),
  population: z.number().describe("Population count"),
  continent: z.string().describe("Continent name")
});

const model = new ChatOpenAI({
  modelName: "gpt-4",
  configuration: { basePath: "https://ai.company.internal/v1" }
});

const parser = StructuredOutputParser.fromZodSchema(CountryCapital);

const prompt = `Give me information about France.\n${parser.getFormatInstructions()}`;
const response = await model.invoke(prompt);
const result = await parser.parse(response.content);

console.log(`Country: ${result.country}`);
console.log(`Capital: ${result.capital}`);
console.log(`Population: ${result.population}`);
console.log(`Continent: ${result.continent}`);
```

</details>

<details>
<summary>Vercel AI SDK (JavaScript)</summary>

```javascript
import { createOpenAI } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

const CountryCapitalSchema = z.object({
  country: z.string(),
  capital: z.string(),
  population: z.number(),
  continent: z.string()
});

const result = await generateObject({
  model: createOpenAI({ baseURL: 'https://ai.company.internal/v1' })('gpt-4'),
  schema: CountryCapitalSchema,
  prompt: 'Give me information about France'
});

console.log(`Country: ${result.object.country}`);
console.log(`Capital: ${result.object.capital}`);
console.log(`Population: ${result.object.population}`);
console.log(`Continent: ${result.object.continent}`);
```

</details>

## How It Works

1. **Define Schema**: Create a structured schema for the expected output
2. **Request Format**: Tell the model to return data in that specific structure
3. **Parse Response**: The response is guaranteed to match your schema
4. **Type Safety**: Get type-safe results in your application

## Try It Yourself

1. Choose your preferred framework
2. Install required dependencies
3. Modify the schema for your use case (e.g., product info, user data, etc.)
4. Replace the endpoint with your actual endpoint

## Resources

- [OpenAI Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs)
- [Vercel AI SDK generateObject](https://sdk.vercel.ai/docs/ai-sdk-core/generating-structured-data)
- [LangChain Output Parsers](https://python.langchain.com/docs/modules/model_io/output_parsers/)
- [Zod Schema Validation](https://zod.dev/)

---

*Questions? Reach out on Slack #guild-ai*