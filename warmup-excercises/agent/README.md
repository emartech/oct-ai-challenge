# AI Agent Development

> Build autonomous AI agents that can perform complex, multi-step tasks

## Overview

AI agents are autonomous systems that can understand goals, plan actions, and execute tasks with minimal human intervention.

## Examples

<details>
<summary>LangChain Python</summary>

```python
from langchain.agents import initialize_agent, Tool
from langchain.llms import Custom
from langchain_community.tools import DuckDuckGoSearchRun

agent = initialize_agent(
    [
        Tool(
            name="Calculator",
            func=lambda x: eval(x),
            description="Useful for mathematical calculations"
        ),
        Tool(
            name="Search",
            func=DuckDuckGoSearchRun().run,
            description="Search for information on the internet"
        )
    ],
    Custom(endpoint="https://ai.company.internal/v1/chat"),
    agent="zero-shot-react-description",
    verbose=True
)

result = agent.run("Calculate ((15 * 23) + (47 * 3)) / 6, then search for the meaning and significance of that number")
print(result)
```

</details>

<details>
<summary>LangChain JavaScript</summary>

```javascript
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { Calculator } from "langchain/tools/calculator";
import { DuckDuckGoSearch } from "@langchain/community/tools/duckduckgo_search";

const executor = await initializeAgentExecutorWithOptions(
  [new Calculator(), new DuckDuckGoSearch()],
  new ChatOpenAI({
    modelName: "gpt-4",
    configuration: { basePath: "https://ai.company.internal/v1" }
  }),
  { agentType: "zero-shot-react-description", verbose: true }
);

const result = await executor.call({
  input: "Calculate ((15 * 23) + (47 * 3)) / 6, then search for the meaning and significance of that number"
});
console.log(result.output);
```

</details>

<details>
<summary>Vercel AI SDK (JavaScript)</summary>

```javascript
import { createOpenAI } from '@ai-sdk/openai';
import { generateText, tool } from 'ai';
import { z } from 'zod';
import { search } from 'duck-duck-scrape';

const result = await generateText({
  model: createOpenAI({ baseURL: 'https://ai.company.internal/v1' })('gpt-4'),
  tools: {
    calculate: tool({
      description: 'Useful for mathematical calculations',
      parameters: z.object({ expression: z.string() }),
      execute: async ({ expression }) => eval(expression)
    }),
    search: tool({
      description: 'Search for information on the internet',
      parameters: z.object({ query: z.string() }),
      execute: async ({ query }) => {
        const results = await search(query, { safeSearch: 'moderate' });
        return results.results.slice(0, 3).map(r => `${r.title}: ${r.description}`).join('\n');
      }
    })
  },
  toolChoice: 'auto',
  prompt: 'Calculate ((15 * 23) + (47 * 3)) / 6, then search for the meaning and significance of that number'
});
console.log(result.text);
```

</details>

## How It Works

1. **Initialize**: Set up your agent with the enterprise endpoint
2. **Configure Tools**: Add capabilities your agent can use (Calculator and Search)
3. **Execute**: Run tasks and get responses

## Try It Yourself

1. Choose your preferred framework (LangChain Python/JS or Vercel AI SDK)
2. Install required dependencies
3. Replace the endpoint with your actual endpoint
4. Run the example

## Resources

- [LangChain Python Docs](https://python.langchain.com/)
- [LangChain JS Docs](https://js.langchain.com/)
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Agent Components - Prompting Guide](https://www.promptingguide.ai/agents/components)
- [Internal AI Platform Guide](#)

---

*Questions? Reach out on Slack #guild-ai*
