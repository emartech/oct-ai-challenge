# Warmup Exercises - AI Agent Instructions

This repository contains warmup exercises for learning AI agent development with enterprise endpoints.

## Project Overview

This is a collection of educational exercises designed to teach developers how to build AI agents using various frameworks. The exercises progress from basic interactions to complex agent implementations, all using no-authentication enterprise endpoints.

## Structure

Each exercise folder contains:
- `README.md` with working code examples
- Three framework implementations (LangChain Python, LangChain JS, Vercel AI SDK)
- No API keys or authentication required

## Build and Test Commands

### Python Examples
```bash
pip install langchain langchain-community duckduckgo-search
python agent_example.py
```

### JavaScript Examples
```bash
npm install langchain @langchain/community @langchain/community/tools/duckduckgo_search
npm install ai @ai-sdk/openai duck-duck-scrape zod
node agent_example.js
```

## Code Style Guidelines

- Keep examples minimal and focused
- No comments in code (self-documenting)
- Inline single-use variables where appropriate
- Multi-line formatting for complex function parameters
- Store results in variables before output
- Use DuckDuckGo for search (no API key required)

## Contributing

When creating new exercises:
- Follow the established folder structure
- Include all three framework examples
- Use collapsible sections for code
- Link to official documentation
- Test all code before committing
