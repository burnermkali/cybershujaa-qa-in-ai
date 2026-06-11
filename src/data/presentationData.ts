import {
  Bot,
  Lightbulb,
  ListChecks,
  BookOpen,
  Wrench,
  Zap,
  Code2,
  MonitorPlay,
  Heart,
  type LucideIcon
} from "lucide-react";

export interface Section {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  content: SectionContent;
}

export interface SectionContent {
  heading: string;
  subheading?: string;
  bullets?: string[];
  highlights?: { label: string; value: string }[];
  quote?: { text: string; author: string };
  tips?: string[];
  codeSnippet?: { language: string; code: string };
  quiz?: QuizQuestion;
  timeline?: TimelineItem[];
  tools?: Tool[];
  links?: { label: string; url: string }[];
}

export interface QuizQuestion {
  question: string;
  options: { text: string; isCorrect: boolean }[];
  feedback: { correct: string; incorrect: string };
}

export interface TimelineItem {
  title: string;
  description: string;
  level: "junior" | "mid" | "senior" | "lead";
}

export interface Tool {
  name: string;
  category: string;
  description: string;
}

export const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    shortTitle: "Intro",
    icon: Bot,
    content: {
      heading: "AI in Quality Assurance 🤖",
      subheading: "How Artificial Intelligence is transforming software testing",
      bullets: [
        "Thomas Adika — QA Engineer at Serianu Ltd",
        "I build automated test frameworks for real enterprise cybersecurity platforms",
        "Tonight: theory first, then a live AI demo that would have taken me a week two years ago",
        "Everything you're looking at was built today — using AI"
      ],
      highlights: [
        { label: "Date", value: "Thursday, 11th June 2026" },
        { label: "Time", value: "7:00 PM – 8:00 PM EAT" },
        { label: "Venue", value: "Online – CyberShujaa" }
      ],
      quote: {
        text: "The AI doesn't replace the QA engineer. It replaces the QA engineer who doesn't use AI.",
        author: "Thomas Adika"
      },
      links: [
        { label: "Session Repo on GitHub", url: "https://github.com/burnermkali/cybershujaa-qa-in-ai" }
      ]
    }
  },
  {
    id: "agenda",
    title: "Agenda",
    shortTitle: "Agenda",
    icon: ListChecks,
    content: {
      heading: "What We'll Cover Tonight",
      bullets: [
        "What is QA? (for everyone, even if you've never coded)",
        "How AI is changing software testing — 4 concrete ways",
        "The tools: Playwright + Claude Code + MCP",
        "How to prompt as a QA engineer — the RCTSO framework",
        "Playwright-specific prompting: real examples you can use tonight",
        "LIVE DEMO: AI inspects a site, writes tests, runs them, reports back",
        "Q&A — questions submitted in advance + live"
      ],
      tips: [
        "Type questions in the chat any time — I'll answer them all",
        "Everything shown tonight is open source and free to start"
      ]
    }
  },
  {
    id: "what-is-qa",
    title: "What is QA?",
    shortTitle: "QA Basics",
    icon: BookOpen,
    content: {
      heading: "What is Quality Assurance?",
      subheading: "Let me tell you a story first",
      quote: {
        text: "My team is hired to build a 20-floor apartment block. The client promises to pay us KES 1 million when we deliver — exactly what the architect designed. My job isn't to lay the bricks or design the floors. My job is to walk every level before handover: does the electricity work? Do the staircases hold? Are the lifts safe? Is it clean? If I miss something and the client moves in to find the tap doesn't work — we lose the million. My job is to make sure we never lose that million.",
        author: "Thomas Adika — explaining QA"
      },
      bullets: [
        "In software: the 'building' is the app, the 'architect' is the developer, the client is the user",
        "QA = systematically verifying that everything works before the user finds out it doesn't",
        "Two types: manual (a human tests it) and automated (code runs the tests for you)",
        "A QA engineer thinks like someone trying to break things — professionally",
        "You don't need to be a full developer to start — you need precision and curiosity"
      ],
      highlights: [
        { label: "The mission", value: "Protect the delivery" },
        { label: "The mindset", value: "Professional skeptic" },
        { label: "The reward", value: "The million stays" }
      ],
      quiz: {
        question: "The building is handed over. The client discovers the water pressure on floor 18 is broken. Who failed?",
        options: [
          { text: "The plumber who installed it wrong", isCorrect: false },
          { text: "The QA engineer who didn't test floor 18", isCorrect: false },
          { text: "Both — quality is a shared responsibility", isCorrect: true },
          { text: "The client for moving in too early", isCorrect: false }
        ],
        feedback: {
          correct: "Exactly. QA and the team share responsibility — quality is built in, not bolted on at the end.",
          incorrect: "Think bigger — it's never just one person's fault. Quality is a team sport."
        }
      }
    }
  },
  {
    id: "ai-in-qa",
    title: "AI in QA",
    shortTitle: "AI + QA",
    icon: Zap,
    content: {
      heading: "AI in QA — The Shift",
      subheading: "Before AI vs After AI",
      bullets: [
        "BEFORE: QA engineers manually read specs, write 50-line test scripts, run them overnight",
        "BEFORE: One typo in a CSS selector breaks everything at 2 AM",
        "NOW: Describe what to test in plain English → AI writes the test",
        "NOW: AI reads your entire codebase and tells you what coverage is missing",
        "NOW: Self-healing tests — AI fixes broken selectors automatically",
        "NOW: AI turns raw test output into a readable Jira comment in seconds"
      ],
      highlights: [
        { label: "Test generation", value: "AI writes specs from your description" },
        { label: "Bug prediction", value: "AI flags risky code before it ships" },
        { label: "Self-healing", value: "AI repairs broken selectors automatically" },
        { label: "AI summarization", value: "Raw results → Jira comment in 2 sec" }
      ],
      quote: {
        text: "Before, you needed to be a developer to write good tests. Now, if you can describe what SHOULD happen, AI can write the test. Your superpower is critical thinking — and that's a human skill.",
        author: "Thomas Adika"
      }
    }
  },
  {
    id: "tools",
    title: "Tools",
    shortTitle: "Tools",
    icon: Wrench,
    content: {
      heading: "The QA + AI Toolkit",
      subheading: "Playwright is your hands. Claude is your brain. MCP is the wire.",
      tools: [
        {
          name: "Playwright",
          category: "Browser Automation",
          description: "Industry-standard framework by Microsoft. Controls browsers like a real user. Free, open source."
        },
        {
          name: "Claude Code",
          category: "AI Pair Programmer",
          description: "AI coding assistant that lives in your terminal. Writes tests, debugs, explains code."
        },
        {
          name: "Playwright MCP",
          category: "AI ↔ Browser Bridge",
          description: "Connects Claude directly to Playwright. Claude can navigate, click, screenshot, and assert — no manual code needed."
        },
        {
          name: "Allure / HTML Reporter",
          category: "Test Reporting",
          description: "Visual test reports with screenshots, traces, and timelines. Share with your team or attach to Jira."
        },
        {
          name: "Jira",
          category: "Bug & Test Tracking",
          description: "Where test results and bugs live. AI can auto-write Jira comments from test output."
        },
        {
          name: "VS Code / Cursor",
          category: "IDE",
          description: "Your editor. Both have AI extensions that help write and debug test code inline."
        }
      ],
      tips: [
        "All of these tools have free tiers — you can start today with zero cost",
        "Playwright has a code recorder: npx playwright codegen [url] — it writes tests as you click"
      ]
    }
  },
  {
    id: "prompting-framework",
    title: "Prompt Building Blocks",
    shortTitle: "Prompting",
    icon: Lightbulb,
    content: {
      heading: "Don't Forget Your Basics",
      subheading: "Build effective prompts by combining 2–6 of these blocks",
      tools: [
        {
          name: "Task Description",
          category: "What to do",
          description: "The core ask — what action should the AI take? Be specific and unambiguous."
        },
        {
          name: "Role",
          category: "Who the AI is",
          description: "Define the AI's persona. e.g. 'You are a senior QA engineer specializing in Playwright.'"
        },
        {
          name: "Boundaries",
          category: "What NOT to do",
          description: "Constraints and guardrails. e.g. 'Do not modify source files. Use only @playwright/test.'"
        },
        {
          name: "Context",
          category: "Background info",
          description: "System details the AI needs: URL, tech stack, auth, environment, selectors."
        },
        {
          name: "Specific Requirements",
          category: "Exact criteria",
          description: "Numbered list of exactly what must be tested or delivered. No room for guessing."
        },
        {
          name: "Reasoning",
          category: "Why it matters",
          description: "Explain the motivation. Helps AI make better trade-off decisions when edge cases arise."
        }
      ],
      tips: [
        "Not all use cases require all six building blocks",
        "The parameters of your desired output will determine which blocks you need",
        "Don't overthink your initial prompt — this is an iterative process, you can always refine"
      ]
    }
  },
  {
    id: "playwright-prompting",
    title: "Playwright Prompts",
    shortTitle: "PW Prompts",
    icon: Code2,
    content: {
      heading: "A Production-Grade QA Prompt",
      subheading: "All 6 building blocks — this is what we'll run live",
      codeSnippet: {
        language: "text",
        code: `TASK DESCRIPTION:
Generate a complete Playwright TypeScript test suite for a React
presentation app, execute the tests, and open the HTML report.

ROLE:
You are a senior QA automation engineer with 5+ years of Playwright
experience. You write clean, maintainable tests with descriptive
names and precise assertions.

BOUNDARIES:
- Do NOT modify any source files
- Use only @playwright/test — no external libraries
- No hardcoded waits (use waitForLoadState / expect.toBeVisible)
- Save spec to: ./tests/e2e/presentation.spec.ts

CONTEXT:
- App: React + Vite SPA running at http://localhost:8080
- Navigation: data-testid="btn-next" / data-testid="btn-previous"
- Site title testid: data-testid="site-title"
- 9 slides total, dark mode default, no authentication

SPECIFIC REQUIREMENTS:
1. Page loads: site-title is visible, HTTP 200
2. Next button advances from slide 1 to slide 2 (heading changes)
3. Previous button is disabled on slide 1
4. Previous navigates back from slide 2 to slide 1
5. Keyboard ArrowRight advances a slide
6. Mobile (375x667): no horizontal overflow (scrollWidth <= viewportWidth)
7. Screenshot attached on every test failure

REASONING:
This app runs live in front of an audience tonight. Navigation
failures or mobile overflow would be visible to 50+ students.
These 7 tests cover the highest-risk paths for a live demo.

OUTPUT:
Run: npx playwright test tests/e2e/presentation.spec.ts --reporter=html
Then: npx playwright show-report`
      },
      tips: [
        "The more context blocks you fill in, the fewer back-and-forth corrections you need",
        "BOUNDARIES saves you from the AI 'helping' by rewriting your source code",
        "REASONING helps the AI choose correctly when it hits an edge case you didn't predict"
      ]
    }
  },
  {
    id: "live-demo",
    title: "Live Demo",
    shortTitle: "Demo 🔴",
    icon: MonitorPlay,
    content: {
      heading: "🔴 Live Demo — Watch AI Do QA",
      subheading: "No pre-written scripts. This is happening now.",
      bullets: [
        "Target: this presentation site at localhost:3000",
        "I will type a prompt into Claude Code — live, in front of you",
        "Claude will navigate the site, inspect elements, write specs, run tests",
        "You will watch a browser open and tests execute in real time",
        "At the end: HTML report opens with evidence of every test"
      ],
      highlights: [
        { label: "Step 1", value: "Type the RCTSO prompt" },
        { label: "Step 2", value: "AI navigates & writes specs" },
        { label: "Step 3", value: "Tests run — browser visible" },
        { label: "Step 4", value: "HTML report opens" }
      ],
      quote: {
        text: "If something goes wrong during the demo — that's a real QA moment. We investigate together.",
        author: "Thomas Adika"
      }
    }
  },
  {
    id: "thank-you",
    title: "Resources & Thank You",
    shortTitle: "Wrap Up",
    icon: Heart,
    content: {
      heading: "Keep Building 🚀",
      subheading: "Everything shown tonight is free to start",
      bullets: [
        "AI in QA is a multiplier, not a replacement — your thinking + AI speed = unstoppable",
        "Prompting is a skill. RCTSO: Role, Context, Task, Steps, Output",
        "Playwright is the industry standard — learn it, it's free",
        "You don't need to be a full developer to start — be precise and curious",
        "Build a small app, write tests for it, put it on GitHub — that's your portfolio"
      ],
      highlights: [
        { label: "Playwright", value: "playwright.dev" },
        { label: "Claude Code", value: "claude.ai/code" },
        { label: "Questions", value: "bit.ly/mentorshipquestions2026" }
      ],
      quote: {
        text: "Two years ago, what I showed you tonight would have taken a week. The question isn't whether AI will change QA. It already has. Will you learn to use it?",
        author: "Thomas Adika"
      },
      links: [
        { label: "Playwright Docs", url: "https://playwright.dev" },
        { label: "Submit Questions", url: "https://bit.ly/mentorshipquestions2026" }
      ]
    }
  }
];
