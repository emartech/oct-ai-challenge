# MCP Server Creation

Learn how to create your own Model Context Protocol (MCP) servers to expose custom tools and resources to AI models.

## What is an MCP Server?

An MCP server is a service that exposes tools, resources, and prompts that AI models can use. It follows the Model Context Protocol specification to provide a standardized interface for AI-tool communication.

## Examples

<details>
<summary>TypeScript SDK</summary>

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "math-server",
    version: "1.0.0"
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "add",
        description: "Add two numbers",
        inputSchema: {
          type: "object",
          properties: {
            a: { type: "number", description: "First number" },
            b: { type: "number", description: "Second number" }
          },
          required: ["a", "b"]
        }
      },
      {
        name: "multiply",
        description: "Multiply two numbers",
        inputSchema: {
          type: "object",
          properties: {
            a: { type: "number", description: "First number" },
            b: { type: "number", description: "Second number" }
          },
          required: ["a", "b"]
        }
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  switch (name) {
    case "add":
      return {
        content: [
          {
            type: "text",
            text: `${args.a} + ${args.b} = ${args.a + args.b}`
          }
        ]
      };
    case "multiply":
      return {
        content: [
          {
            type: "text",
            text: `${args.a} × ${args.b} = ${args.a * args.b}`
          }
        ]
      };
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);

// Run: npx tsx math-server.ts
// Test: echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | npx tsx math-server.ts
```

</details>

<details>
<summary>Python FastMCP</summary>

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Math Server")

@mcp.tool()
def add(a: float, b: float) -> float:
    """Add two numbers"""
    return a + b

@mcp.tool()
def multiply(a: float, b: float) -> float:
    """Multiply two numbers"""
    return a * b

@mcp.tool()
def divide(a: float, b: float) -> float:
    """Divide two numbers"""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

if __name__ == "__main__":
    mcp.run()

# Run: python math_server.py
# Test: echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | python math_server.py
```

</details>

<details>
<summary>Express HTTP Server</summary>

```javascript
import express from 'express';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { HttpServerTransport } from '@modelcontextprotocol/sdk/server/http.js';

const app = express();
app.use(express.json());

const server = new Server(
  {
    name: "http-math-server",
    version: "1.0.0"
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: "calculate",
        description: "Evaluate a mathematical expression",
        inputSchema: {
          type: "object",
          properties: {
            expression: { type: "string", description: "Math expression to evaluate" }
          },
          required: ["expression"]
        }
      }
    ]
  };
});

server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;
  
  if (name === "calculate") {
    try {
      const result = eval(args.expression);
      return {
        content: [
          {
            type: "text",
            text: `${args.expression} = ${result}`
          }
        ]
      };
    } catch (error) {
      throw new Error(`Invalid expression: ${error.message}`);
    }
  }
  
  throw new Error(`Unknown tool: ${name}`);
});

const transport = new HttpServerTransport('/mcp', app);
await server.connect(transport);

app.listen(3000, () => {
  console.log('MCP server running on http://localhost:3000/mcp');
});

// Run: node server.js
// Test: curl -X POST http://localhost:3000/mcp -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"tools/list","id":1}'
```

</details>

## Testing with MCP Inspector

```bash
# Debug any MCP server interactively
npx @modelcontextprotocol/inspector node math-server.js
npx @modelcontextprotocol/inspector python math_server.py
```


## Installation

```bash
# TypeScript SDK
npm install @modelcontextprotocol/sdk

# Python FastMCP
pip install fastmcp
```

## Try It Yourself

1. Choose your preferred language (TypeScript or Python)
2. Create a simple math server using the examples
3. Test it with the MCP CLI tool
4. Extend it with your own custom tools
5. Connect it to an AI model using the client examples

## Resources

- [MCP SDK Documentation](https://github.com/modelcontextprotocol/sdk)
- [FastMCP Python Framework](https://github.com/modelcontextprotocol/fastmcp)
- [MCP Specification](https://spec.modelcontextprotocol.io/)
- [Example MCP Servers](https://github.com/modelcontextprotocol/servers)

---

*Questions? Reach out on Slack #guild-ai*