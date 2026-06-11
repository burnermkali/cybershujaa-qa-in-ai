# AI in Quality Assurance — CyberShujaa Mentorship 2026

**Presenter:** Thomas Adika — QA Engineer, Serianu Ltd  
**Session:** Thursday, 11th June 2026 | 7:00 PM – 8:00 PM EAT  
**Platform:** Online — CyberShujaa Job Hunting & Mentorship Programme

---

## About This Repo

This is the live presentation app built and demoed during the CyberShujaa mentorship session on **AI in Quality Assurance**. The entire app was built using AI (Vite + React + TypeScript + Tailwind CSS + shadcn/ui), and includes a live Playwright + Claude Code demo showing how AI can write, run, and report automated test suites in real time.

---

## Slides / Session Content

| # | Slide | Topic |
|---|-------|-------|
| 1 | Introduction | Who Thomas is, what we're building tonight |
| 2 | Agenda | What we'll cover |
| 3 | What is QA? | The apartment block analogy — QA for everyone |
| 4 | AI in QA | Before vs After AI — 4 concrete shifts |
| 5 | Tools | Playwright + Claude Code + MCP + Jira |
| 6 | Prompt Building Blocks | 6-block framework: Task, Role, Boundaries, Context, Requirements, Reasoning |
| 7 | Playwright Prompts | A production-grade QA prompt — what we run live |
| 8 | Live Demo | AI navigates the site, writes specs, runs tests, opens the HTML report |
| 9 | Resources & Thank You | Links, next steps, Q&A |

---

## Tech Stack

- **Vite + React + TypeScript** — frontend framework
- **Tailwind CSS + shadcn/ui** — styling and components
- **framer-motion** — slide animations
- **Playwright** — browser automation and E2E testing
- **Claude Code + Playwright MCP** — AI writes and runs the tests live

---

## Running the Presentation Locally

```sh
# Clone the repo
git clone https://github.com/burnermkali/cybershujaa-qa-in-ai.git
cd cybershujaa-qa-in-ai

# Install dependencies
npm install

# Start the dev server (runs at localhost:8080)
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) — use the arrow buttons or keyboard arrows to navigate slides.

---

## Live Demo: AI-Written Playwright Tests

The demo prompt used during the session tests this app using all 6 prompt building blocks:

- `data-testid="btn-next"` / `data-testid="btn-previous"` — navigation buttons
- `data-testid="site-title"` — page title assertion
- 7 test cases covering navigation, keyboard, mobile overflow, and screenshot-on-failure

To run the tests yourself after cloning:

```sh
npx playwright install --with-deps
npx playwright test tests/e2e/presentation.spec.ts --reporter=html
npx playwright show-report
```

---

## Key Concepts from the Session

**The 6 Prompt Building Blocks:**
1. **Task Description** — what action should the AI take?
2. **Role** — define the AI's persona
3. **Boundaries** — what NOT to do
4. **Context** — URL, stack, selectors, environment
5. **Specific Requirements** — numbered list of exact test criteria
6. **Reasoning** — why these tests matter (helps AI make better edge-case decisions)

**The core insight:**
> The AI doesn't replace the QA engineer. It replaces the QA engineer who doesn't use AI.

---

## Resources

- [Playwright Docs](https://playwright.dev)
- [Claude Code](https://claude.ai/code)
- [Submit Questions](https://bit.ly/mentorshipquestions2026)
- [CyberShujaa Programme](https://bit.ly/CyberShujaa-JobHuntingandMentorship)
