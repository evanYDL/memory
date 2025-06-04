# Dementia Companion Demo

This repository contains a minimal example of a voice-enabled companion for someone living with dementia. The demo uses the OpenAI Realtime API and Agents SDK to keep the user oriented and connected to family.

## Features
- Speaks slowly and clearly while providing a warm tone
- Reminds the user of the current date and time
- Simulates connecting the user to a named family member
- Shares short updates about what the family is doing

## Setup
1. Install dependencies with `npm install`.
2. Provide your `OPENAI_API_KEY` in the environment (copy `.env.sample` to `.env`).
3. Start the application with `npm run dev` and open [http://localhost:3000](http://localhost:3000).

The dementia companion scenario is loaded by default.

## Output Guardrails
Assistant messages are checked for safety and compliance before being shown in the UI. Moderation logic lives in `src/app/App.tsx` and marks transcript items as **PASS** or **FAIL** based on guardrail results.

## Contributions
Pull requests are welcome if they help improve the core dementia companion example.
