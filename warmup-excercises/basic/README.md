# Basic AI Interactions

Learn how to make basic requests to AI models using system and user prompts. This exercise demonstrates the simplest form of AI interaction - sending a prompt and receiving a response.

## Examples

📁 [capital-finder/](./capital-finder/)

<details>
<summary>OpenAI SDK Python</summary>

📄 [capital-finder.py](./capital-finder/capital-finder.py)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://ai.company.internal/v1",
    api_key="not-needed"
)

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {
            "role": "system",
            "content": "You are a geography expert. Your task is to provide the capital city of any country asked. Respond only with the city name."
        },
        {
            "role": "user",
            "content": "France"
        }
    ]
)

result = response.choices[0].message.content
print(result)
```

</details>

<details>
<summary>OpenAI SDK JavaScript</summary>

📄 [capital-finder.js](./capital-finder/capital-finder.js)

```javascript
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
```

</details>

<details>
<summary>cURL</summary>

📄 [capital-finder.sh](./capital-finder/capital-finder.sh)

```bash
curl https://ai.company.internal/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4",
    "messages": [
      {
        "role": "system",
        "content": "You are a geography expert. Your task is to provide the capital city of any country asked. Respond only with the city name."
      },
      {
        "role": "user",
        "content": "France"
      }
    ]
  }' | jq -r '.choices[0].message.content'
```

</details>

<details>
<summary>LangChain Python</summary>

```python
from langchain.llms import Custom
from langchain.schema import SystemMessage, HumanMessage

llm = Custom(endpoint="https://ai.company.internal/v1/chat")

messages = [
    SystemMessage(content="You are a geography expert. Your task is to provide the capital city of any country asked. Respond only with the city name."),
    HumanMessage(content="France")
]

result = llm.invoke(messages)
print(result)
```

</details>

<details>
<summary>LangChain JavaScript</summary>

```javascript
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessage, HumanMessage } from "langchain/schema";

const model = new ChatOpenAI({
  modelName: "gpt-4",
  configuration: { basePath: "https://ai.company.internal/v1" }
});

const messages = [
  new SystemMessage("You are a geography expert. Your task is to provide the capital city of any country asked. Respond only with the city name."),
  new HumanMessage("France")
];

const result = await model.invoke(messages);
console.log(result.content);
```

</details>

<details>
<summary>Vercel AI SDK (JavaScript)</summary>

```javascript
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const result = await generateText({
  model: createOpenAI({ baseURL: 'https://ai.company.internal/v1' })('gpt-4'),
  system: 'You are a geography expert. Your task is to provide the capital city of any country asked. Respond only with the city name.',
  prompt: 'France'
});
console.log(result.text);
```

</details>

## How It Works

1. **System Prompt**: Defines the AI's role and behavior
2. **User Prompt**: The actual question or request
3. **Response**: The AI's answer based on the prompts

## Try It Yourself

1. Choose your preferred framework
2. Install required dependencies
3. Replace the endpoint with your actual endpoint
4. Try different countries to test the responses

## Resources

- [OpenAI Python SDK](https://github.com/openai/openai-python)
- [OpenAI Node.js SDK](https://github.com/openai/openai-node)
- [LangChain Python Docs](https://python.langchain.com/)
- [LangChain JS Docs](https://js.langchain.com/)
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)

---

*Questions? Reach out on Slack #guild-ai*
