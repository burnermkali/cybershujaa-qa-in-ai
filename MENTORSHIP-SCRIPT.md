# 🤖 AI in Quality Assurance — Mentorship Hour Script
**Presenter:** Thomas Adika, QA Engineer @ Serianu Ltd  
**Event:** CyberShujaa Job Hunting & Mentorship  
**Date:** Thursday, 11 June 2026 | 7:00 PM – 8:00 PM EAT  
**Format:** Theory → Live Practical Demo

---

## ⏱ Session Timing Overview

| Block | Duration | What |
|-------|----------|------|
| Intro & Housekeeping | 3 min | Who I am, what we'll cover |
| Theory: AI in QA | 20 min | Concepts, tools, prompting |
| Demo Setup (live) | 2 min | Open browser, terminal ready |
| Practical: AI+Playwright Live | 25 min | The "go big" demo |
| Q&A | 10 min | Questions submitted + live |
| Wrap-up | 2 min | Resources, next steps |

---

## 🎤 BLOCK 1 — Intro & Housekeeping (3 min)

> **[Share screen: presentation slides site]**

**Say:**
> "Good evening everyone — welcome to the CyberShujaa Mentorship Hour. I'm Thomas Adika, a QA Engineer at Serianu. Tonight is special because this entire session — the slides you're looking at and what I'm about to demo — was built today, using AI. That's the point: AI doesn't just help you test software, it helps you ship faster."

**Cover quickly:**
- Tonight: **theory first** so everyone has the same foundation, then a **live demo** that shows it for real
- Raise your hand (or type in chat) at any time — I'll pick up questions at the end

---

## 📖 BLOCK 2 — Theory: AI in Quality Assurance (20 min)

### 2.1 What is QA? (3 min)

> **[Slide: What is QA?]**

**Key points (pick 2-3 bullets, keep it snappy):**
- QA = making sure software works **the way it's supposed to**, before real users find out it doesn't
- Two types of QA: **manual** (human clicks through the app) and **automated** (code/bots do it)
- A QA engineer is a professional **skeptic** — your job is to find problems others missed
- QA is a career path. You don't need to be a full developer to get started

**Ask the room:**
> "Quick show of hands — who has ever downloaded an app and it crashed on the first try? That's a QA failure. That's what we prevent."

---

### 2.2 What is AI doing in QA? (5 min)

> **[Slide: AI in QA — The Shift]**

**Before AI:**
- A QA engineer manually reads specs, writes 50-line test scripts, runs them overnight
- Bugs from a typo in a selector break everything at 2 AM

**With AI:**
- You describe what to test in plain English → AI writes the test
- AI reads your entire codebase and suggests what's missing
- AI keeps tests updated when your app changes (self-healing)
- AI turns raw test results into a readable Jira comment

**The shift:**
> "Before, you needed to be a developer to write good tests. Now, if you can describe what *should* happen, AI can write the test. Your QA superpower becomes your ability to think critically about what to test — and that's a human skill."

**4 ways AI is used in QA today:**

| Area | What AI does |
|------|-------------|
| **Test generation** | Reads your app, writes Playwright/Jest specs |
| **Bug prediction** | Flags risky code changes before they ship |
| **Self-healing selectors** | Fixes broken CSS selectors automatically |
| **AI test summarization** | Writes the Jira comment from raw test output |

---

### 2.3 Tools of the Trade (3 min)

> **[Slide: QA + AI Toolkit]**

| Tool | What it does |
|------|-------------|
| **Playwright** | The industry-standard browser automation framework (Microsoft) |
| **Claude Code** | AI coding assistant with MCP — your AI pair programmer |
| **Playwright MCP** | Bridge that lets Claude *actually control a browser* |
| **Allure / HTML Reporter** | Visual test reports you can share with your team |
| **Jira** | Where bugs and test results live |

**Key message:**
> "Playwright is your hands. Claude is your brain. MCP is the wire connecting them."

---

### 2.4 How to Prompt as a QA — The Core Skill (9 min)

> **[Slide: Prompting as a QA Engineer]**

**Why this matters:**
> "Tools are only as good as the instructions you give them. A vague prompt gives you vague tests. A precise prompt gives you production-ready specs. This is the skill that separates a good AI-powered QA from a bad one."

#### The 6 Prompt Building Blocks

```
TASK DESCRIPTION    The core ask — what action should the AI take?
ROLE                Who is the AI? (senior QA engineer, Playwright specialist...)
BOUNDARIES          What NOT to do — constraints, guardrails, output location
CONTEXT             System details: URL, tech stack, selectors, auth, env
SPECIFIC REQS       Numbered list of exactly what must be tested
REASONING           Why it matters — helps AI make better edge-case decisions
```

> "You can build an effective prompt with 2-6 of these blocks. Not all prompts need all six — but the harder the task, the more blocks you should fill in."

#### Example 1: Weak Prompt (don't do this)
```
"Test my website"
```
> "This gives you nothing useful. The AI doesn't know what site, what to test, or what a pass looks like."

#### Example 2: Strong QA Prompt for Playwright
```
ROLE: You are a senior QA engineer specializing in browser automation with Playwright.

CONTEXT: I have a Next.js web application running at http://localhost:8080. 
It has a navigation bar, 8 content slides, and a progress indicator.
No authentication required.

TASK: Generate a comprehensive Playwright test suite that verifies:
1. The page loads successfully (status 200, title visible)
2. Navigation between slides works (next/previous buttons)
3. The progress indicator updates correctly
4. All slides render content (no empty slides)
5. The page is responsive (test at 1280px and 375px viewport)

STEPS:
1. Inspect the page structure first using page.content()
2. Identify stable selectors (prefer data-testid, role, or text over CSS classes)
3. Write one describe block per feature
4. Add a screenshot on failure for each test

OUTPUT: A single TypeScript file ready to run with `npx playwright test`.
Use Playwright's built-in expect assertions. No external libraries.
```

#### Example 3: Prompt to Run and Report
```
ROLE: You are a QA automation engineer.

CONTEXT: Playwright test suite at ./tests/e2e/ targeting http://localhost:8080.
Playwright is already installed. Use npx playwright test.

TASK: 
1. Run the full test suite
2. Identify all failing tests
3. For each failure, explain the likely root cause in one sentence
4. Generate the HTML report
5. Print the path to the HTML report so I can open it

OUTPUT: 
- Summary table: test name | pass/fail | duration
- Root cause analysis for failures
- Exact command to open the HTML report
```

#### Playwright-Specific Prompting Tips

> **[Slide: Playwright Prompting Cheat Sheet]**

**DO:**
- Always include the URL
- Specify viewport sizes if responsive testing matters
- Ask for `data-testid` selectors — they survive UI changes
- Say "wait for network idle" for SPAs (single-page apps)
- Ask for screenshots on failure

**DON'T:**
- Say "test everything" — too vague, waste of tokens
- Use brittle selectors like `.div:nth-child(3)` — they break
- Forget to mention auth if login is needed
- Ask for tests without specifying the assertion — "verify it works" is meaningless

**One-liner power patterns:**
```
"Inspect http://localhost:8080 with Playwright, extract all interactive elements, and return a JSON list of: element type, text, selector."

"Write a Playwright test that checks the login form shows a validation error when the email field is empty."

"Take a full-page screenshot of http://localhost:8080 on mobile (375px width) and save it as mobile-check.png"
```

---

## 🖥️ BLOCK 3 — Practical: The Live Demo (25 min)

> **[Switch to terminal + browser side by side]**

**Say:**
> "Enough theory. Let me show you what this looks like for real. What you're going to watch is me giving an AI instructions — using exactly the framework we just covered — and the AI will open a browser, click around, write tests, run them, and report back. No scripts pre-written. This is live."

### Step 1 — Show the Target (2 min)

> **[Open the presentation site: http://localhost:8080]**

**Say:**
> "This is the site we built today — my presentation slides. It's a React app. I'm going to ask Claude to act as a QA engineer, inspect this site, and test it — without me writing a single line of test code."

---

### Step 2 — The Prompt (live, type it out) (3 min)

> **[Open Claude Code terminal — students watch you type]**

Type the prompt out **live** (slowly enough for students to read):

```
You are a senior QA engineer. Your tools: Playwright MCP browser control.

TARGET: http://localhost:8080 (React presentation app — navigation slides)

YOUR MISSION:
1. Navigate to the site and take a screenshot of the landing page
2. Inspect the page: identify all clickable elements, navigation buttons, and slide structure
3. Write a Playwright TypeScript test file saved to ./tests/e2e/presentation.spec.ts that tests:
   - Page loads (title visible, no console errors)
   - Slide navigation: clicking Next advances to slide 2
   - Slide navigation: clicking Previous from slide 2 returns to slide 1
   - All slides are reachable
   - Mobile viewport (375px): page renders without overflow
4. Run the test suite with: npx playwright test tests/e2e/presentation.spec.ts --reporter=html
5. Print the HTML report path and open it
6. Tell me: PASS or FAIL, and if any test failed, one sentence on why.

Begin now.
```

**Say while typing:**
> "Notice the structure — I'm telling it WHO it is, what tools it has, WHAT site to test, exactly WHAT to check, in what ORDER to do it, and what output I want. That's the RCTSO framework in action."

---

### Step 3 — Watch It Run (10 min)

> **[Let Claude work — narrate what's happening for the audience]**

As Claude runs, narrate:
- *"It's navigating to the site..."*
- *"Taking a screenshot — this becomes evidence in a real QA report"*
- *"Now it's reading the DOM structure to find stable selectors..."*
- *"Writing the spec file — watch how it uses `getByRole` instead of CSS classes"*
- *"Running the tests... you can see the browser opening"*

**Key moments to highlight:**
- When it picks selectors → "See how it chose `getByRole('button', {name: 'Next'})` — that's resilient"
- When a test fails → "Even a failure is valuable — it tells us exactly what broke"
- The spec file it generates → briefly show the code

---

### Step 4 — Open the HTML Report (3 min)

> **[Open the HTML report in browser]**

**Say:**
> "This is what you send to your team lead, your client, or attach to your Jira ticket. Not 'the tests ran' — actual evidence: what passed, what failed, screenshots, how long each test took."

Walk through:
- Overall pass/fail summary
- Click into one test to show the trace
- Show the screenshot evidence

---

### Step 5 — The Notification (2 min)

> **[Show the terminal notification / pop-up that tests are done]**

**Say:**
> "In a real team, this would be a Slack message, a Jira comment, or an email. The AI already wrote the test, ran it, and reported. Your job as a QA engineer was to write 10 lines of prompt. That's the future of QA."

**Optional if time allows — show the AI-generated Jira summary:**
> "Here's what the AI wrote as a Jira comment from those test results..."

---

## ❓ BLOCK 4 — Q&A (10 min)

**Seed questions (use if chat is quiet):**

1. *"Do QA engineers still need to write code if AI can write tests?"*  
   → Yes — you need to understand what's generated, debug it, and know when it's wrong. AI removes boilerplate, not judgment.

2. *"What's the best way to start learning Playwright as a beginner?"*  
   → playwright.dev has a great intro. Start by recording a test with `npx playwright codegen [url]` — it writes the test as you click.

3. *"Can AI test mobile apps too?"*  
   → Yes. Playwright does Android/iOS via Appium bridges. Same prompting principles apply.

4. *"How do I get a job as a QA engineer?"*  
   → Portfolio: build a small app, write tests for it, put it on GitHub. Show evidence of real tests running. That's more valuable than a certificate alone.

---

## 🏁 BLOCK 5 — Wrap-Up (2 min)

**Key takeaways (say these):**
> 1. **AI in QA is a multiplier, not a replacement.** Your critical thinking + AI's speed = unstoppable.  
> 2. **Prompting is a skill.** RCTSO: Role, Context, Task, Steps, Output.  
> 3. **Playwright is the industry standard for browser automation.** Learn it.  
> 4. **You don't need to be a developer to start.** You need to be curious and precise.

**Resources:**
- Playwright docs: playwright.dev
- Claude Code: claude.ai/code
- CyberShujaa Discord / community — keep building

**Closing:**
> "Everything I showed you tonight, I built today — in a few hours — using AI. Two years ago this would have taken a week. The question isn't whether AI will change QA. It already has. The question is: will you learn to use it, or watch from the sidelines? Thank you — and keep building."

---

## 🔧 Pre-Show Checklist (do before 7 PM)

- [ ] Presentation site running at `localhost:8080`
- [ ] Claude Code terminal open and ready
- [ ] Playwright installed in the project (`npx playwright install`)
- [ ] `tests/e2e/` directory exists (empty is fine)
- [ ] Screen share tested — font size large enough (16px+ terminal)
- [ ] Browser zoom at 110%+
- [ ] Mute all notifications (Slack, email, etc.)
- [ ] Have the HTML report command ready: `npx playwright show-report`
- [ ] Backup: if Claude's browser times out, have a pre-run screenshot of results ready

---

## 📎 Appendix — Prompt Templates for Students

### Template A: Inspect and Test Any Site
```
You are a QA engineer with Playwright. 
Site: [URL]
Task: 
1. Screenshot the homepage
2. List all interactive elements
3. Write 3 Playwright tests for the most important user flows
4. Run them and show results
Output: TypeScript spec file + pass/fail summary
```

### Template B: Test a Login Flow
```
Role: QA automation engineer
Context: Login page at [URL]. Credentials: email=[X] password=[Y]
Task: Test these scenarios:
1. Valid login → redirects to dashboard
2. Wrong password → error message shown
3. Empty fields → validation error shown
Output: Playwright TypeScript spec. One describe block. Named screenshots on failure.
```

### Template C: Mobile Responsiveness Check
```
You are a QA engineer checking mobile responsiveness.
URL: [URL]
Viewports to test: 375px (iPhone), 768px (tablet), 1280px (desktop)
Task: Take a screenshot at each viewport. Flag any text overflow, broken layouts, or elements outside viewport.
Output: 3 screenshots + a markdown table showing pass/fail per viewport.
```
