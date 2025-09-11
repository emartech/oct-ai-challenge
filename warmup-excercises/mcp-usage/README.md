# MCP (Model Context Protocol) Usage

Learn how to use the Model Context Protocol to connect AI models with external tools and data sources.

## What is MCP?

The Model Context Protocol (MCP) is an open protocol that standardizes how AI applications connect with external data sources and tools. It enables seamless integration between AI models and various services through a unified interface.

## Examples

<details>
<summary>Vercel AI SDK</summary>

```javascript
import { experimental_createMCPClient as createMCPClient } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const mcpClient = await createMCPClient({
  transport: {
    type: 'stdio',
    command: 'npx',
    args: [
      '-y',
      '@modelcontextprotocol/server-filesystem',
      '/path/to/allowed/directory'
    ]
  }
});

const tools = await mcpClient.tools();

const result = await generateText({
  model: createOpenAI({ baseURL: 'https://ai.company.internal/v1' })('gpt-4'),
  tools,
  maxSteps: 2,
  prompt: 'Read the README.md file and create a summary in SUMMARY.md'
});

console.log(result.text);

await mcpClient.close();
```

</details>

<details>
<summary>LangChain Python</summary>

```python
from langchain_mcp_adapters.client import MultiServerMCPClient
from langgraph.prebuilt import create_react_agent
from langchain_openai import ChatOpenAI
import asyncio

async def main():
    client = MultiServerMCPClient({
        "filesystem": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"],
            "transport": "stdio"
        }
    })
    
    tools = await client.get_tools()
    
    llm = ChatOpenAI(
        model="gpt-4",
        base_url="https://ai.company.internal/v1",
        api_key="not-needed"
    )
    
    agent = create_react_agent(llm, tools)
    
    response = await agent.ainvoke({
        "messages": [{"role": "user", "content": "Read the README.md file and create a summary in SUMMARY.md"}]
    })
    
    print(response["messages"][-1]["content"])
    
    await client.close()

asyncio.run(main())
```

</details>

<details>
<summary>LangChain JavaScript</summary>

```javascript
import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

const client = new MultiServerMCPClient({
  mcpServers: {
    filesystem: {
      transport: "stdio",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"]
    }
  }
});

const tools = await client.getTools();

const model = new ChatOpenAI({
  model: "gpt-4",
  configuration: { basePath: "https://ai.company.internal/v1" }
});

const agent = createReactAgent({ 
  llm: model, 
  tools 
});

const response = await agent.invoke({
  messages: [{ 
    role: "user", 
    content: "Read the README.md file and create a summary in SUMMARY.md" 
  }]
});

console.log(response.messages[response.messages.length - 1].content);

await client.close();
```

</details>

## How It Works

1. **Connect**: Create MCP client with transport configuration
2. **Get Tools**: Retrieve available tools from the MCP server
3. **Use with AI**: Pass tools to your AI model
4. **Execute**: Let the AI interact with the filesystem
5. **Cleanup**: Close the connection when done

## Installation

```bash
# Vercel AI SDK
npm install ai @ai-sdk/openai

# LangChain Python
pip install langchain-mcp-adapters langchain-openai langgraph

# LangChain JavaScript  
npm install @langchain/mcp-adapters @langchain/openai @langchain/langgraph

# MCP server (used via npx, no installation needed)
```

## Try It Yourself

1. Choose your preferred framework
2. Update the directory path to your workspace
3. Run the example to see MCP in action
4. Modify the prompt to perform different file operations

## Resources

- [Vercel AI SDK MCP Documentation](https://ai-sdk.dev/docs/reference/ai-sdk-core/create-mcp-client)
- [LangChain MCP Adapters](https://github.com/langchain-ai/langchain-mcp-adapters)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [MCP Filesystem Server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)

---

*Questions? Reach out on Slack #guild-ai*