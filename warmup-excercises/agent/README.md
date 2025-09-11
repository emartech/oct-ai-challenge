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

# Your enterprise AI endpoint - no authentication required
llm = Custom(endpoint="https://ai.company.internal/v1/chat")

# Initialize search tool (no API key needed)
search = DuckDuckGoSearchRun()

# Define tools the agent can use
tools = [
    Tool(
        name="Calculator",
        func=lambda x: eval(x),
        description="Useful for mathematical calculations"
    ),
    Tool(
        name="Search",
        func=search.run,
        description="Search for information on the internet"
    )
]

# Initialize agent
agent = initialize_agent(
    tools, 
    llm, 
    agent="zero-shot-react-description",
    verbose=True
)

# Run the agent
response = agent.run("Calculate ((15 * 23) + (47 * 3)) / 6, then search for the meaning and significance of that number")
print(f"Result: {response}")
```

</details>

<details>
<summary>LangChain JavaScript</summary>

```javascript
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { Calculator } from "langchain/tools/calculator";
import { DuckDuckGoSearch } from "@langchain/community/tools/duckduckgo_search";

// Your enterprise AI endpoint - no authentication required
const model = new ChatOpenAI({
  modelName: "gpt-4",
  configuration: {
    basePath: "https://ai.company.internal/v1"
  }
});

// Initialize search tool (no API key needed)
const search = new DuckDuckGoSearch();

// Define tools
const tools = [
  new Calculator(),
  search
];

// Initialize and run agent
const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "zero-shot-react-description",
  verbose: true,
});

const result = await executor.call({
  input: "Calculate ((15 * 23) + (47 * 3)) / 6, then search for the meaning and significance of that number"
});

console.log(`Result: ${result.output}`);
```

</details>

<details>
<summary>Vercel AI SDK (JavaScript)</summary>

```javascript
import { createOpenAI } from '@ai-sdk/openai';
import { generateText, tool } from 'ai';
import { z } from 'zod';
import { search } from 'duck-duck-scrape';

// Configure your enterprise AI endpoint - no authentication required
const model = createOpenAI({
  baseURL: 'https://ai.company.internal/v1',
})('gpt-4');

// Define tools
const tools = {
  calculate: tool({
    description: 'Useful for mathematical calculations',
    parameters: z.object({
      expression: z.string().describe('Mathematical expression to evaluate'),
    }),
    execute: async ({ expression }) => eval(expression), // Use safe parser in production
  }),
  search: tool({
    description: 'Search for information on the internet',
    parameters: z.object({
      query: z.string().describe('Search query'),
    }),
    execute: async ({ query }) => {
      // Use DuckDuckGo search (no API key needed)
      const searchResults = await search(query, {
        safeSearch: 'moderate',
        locale: 'en-us'
      });
      
      // Return top 3 results
      return searchResults.results
        .slice(0, 3)
        .map(r => `${r.title}: ${r.description}`)
        .join('\n');
    },
  }),
};

// Run the agent
const { text } = await generateText({
  model,
  tools,
  toolChoice: 'auto',
  prompt: 'Calculate ((15 * 23) + (47 * 3)) / 6, then search for the meaning and significance of that number',
});

console.log(`Result: ${text}`);
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
