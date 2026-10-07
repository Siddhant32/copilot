# CarePilot — AI Personal Health Copilot

Hackathon-ready frontend for a personal health organization platform.

**Tagline:** Your health, understood.

This version uses **synthetic demo data** for Alex Morgan. It is an information and organization tool, not a diagnostic product.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- shadcn-style UI primitives (Radix)
- Lucide, Recharts, Framer Motion

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo path (3–5 minutes)

1. Dashboard
2. Health Timeline
3. Open the September blood report
4. Ask CarePilot what changed
5. Appointments → Prepare with AI
6. Return to Copilot: “What should I discuss with my doctor?”

## Later integration

Mock services live in `src/lib/services`. HTTP wrappers live in `src/lib/api/client.ts`. Replace those with Firebase/Gemini without rewriting the UI.
