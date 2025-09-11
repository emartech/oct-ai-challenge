// 🎯 OCT AI Challenge Configuration
// Update this file to modify challenge content, dates, and details
// No need to touch the Hero.tsx component!

export const CHALLENGE_CONFIG = {
    foundationExercises: {
        title: "🎖️ Foundation Exercises",
        subtitle: "Build your AI development foundation",
        launchDate: "Oct 13, 2025",
        startDate: new Date('2025-10-13'),
        endDate: new Date('2025-10-27'),
        exercises: [
            {
                id: 0,
                emoji: "✅",
                title: "Test Connection",
                description: "Verify your connection to the AI endpoint before starting.",
                hasWorkshop: false,
                badge: "🏓 Ping Pong Champion",
                readmePath: "https://github.com/emartech/oct-ai-challenge/blob/main/warmup-excercises/test/README.md",
                submissionFormUrl: "https://docs.google.com/forms/d/e/test-connection-form/viewform"
            },
            {
                id: 1,
                emoji: "🤖",
                title: "Basic LLM",
                description: "Simple prompt-response interactions with system and user prompts.",
                hasWorkshop: true,
                badge: "🗣️ AI Whisperer",
                readmePath: "https://github.com/emartech/oct-ai-challenge/blob/main/warmup-excercises/basic/README.md",
                submissionFormUrl: "https://docs.google.com/forms/d/e/basic-llm-form/viewform"
            },
            {
                id: 2,
                emoji: "📄",
                title: "JSON Output",
                description: "Force structured JSON output with schema validation.",
                hasWorkshop: false,
                badge: "🎯 Bracket Balancer",
                readmePath: "https://github.com/emartech/oct-ai-challenge/blob/main/warmup-excercises/json/README.md",
                submissionFormUrl: "https://docs.google.com/forms/d/e/json-output-form/viewform"
            },
            {
                id: 3,
                emoji: "🤖",
                title: "AI Agent",
                description: "Build AI agents with tools using LangChain and Vercel AI SDK.",
                hasWorkshop: true,
                badge: "🦾 Digital Puppeteer",
                readmePath: "https://github.com/emartech/oct-ai-challenge/blob/main/warmup-excercises/agent/README.md",
                submissionFormUrl: "https://docs.google.com/forms/d/e/ai-agent-form/viewform"
            },
            {
                id: 4,
                emoji: "🔗",
                title: "MCP Usage",
                description: "Use Model Context Protocol to connect AI with external tools.",
                hasWorkshop: false,
                badge: "🔌 Protocol Plumber",
                readmePath: "https://github.com/emartech/oct-ai-challenge/blob/main/warmup-excercises/mcp-usage/README.md",
                submissionFormUrl: "https://docs.google.com/forms/d/e/mcp-usage-form/viewform"
            },
            {
                id: 5,
                emoji: "🔧",
                title: "MCP Server",
                description: "Create your own MCP servers to expose custom tools to AI.",
                hasWorkshop: false,
                badge: "🏗️ Tool Architect",
                readmePath: "https://github.com/emartech/oct-ai-challenge/blob/main/warmup-excercises/mcp-server/README.md",
                submissionFormUrl: "https://docs.google.com/forms/d/e/mcp-server-form/viewform"
            },
            {
                id: 6,
                emoji: "🚫",
                title: "Prompt Injection",
                description: "Learn about prompt injection vulnerabilities and defenses.",
                hasWorkshop: false,
                badge: "🥷 Prompt Ninja",
                readmePath: "https://github.com/emartech/oct-ai-challenge/blob/main/warmup-excercises/prompt-injection/README.md",
                submissionFormUrl: "https://docs.google.com/forms/d/e/prompt-injection-form/viewform"
            }
        ]
    },
    mainChallenges: {
        title: "🏆 Main Challenges",
        subtitle: "Put your skills to the test",
        startDate: "Oct 27, 2025",
        challenges: [
            {
                id: 1,
                emoji: "📊",
                title: "Coming Soon",
                description: "",
                date: "Oct 27",
                points: "TBD"
            }
        ]
    },

    timeline: {
        milestones: [
            {
                date: "Oct 13",
                label: "Foundation Start",
                description: "All foundation exercises available"
            },
            {
                date: "Oct 27",
                label: "Main Challenge Start",
                description: "First main challenge goes live"
            },
            {
                date: "Nov 21",
                label: "Final Challenge",
                description: "Last main challenge released"
            }
        ]
    }
}

export default CHALLENGE_CONFIG