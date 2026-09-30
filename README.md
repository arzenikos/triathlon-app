<div align="center">
   <img width="100" height="100" alt="triathlon-app-logo" src="https://github.com/user-attachments/assets/6d2cb014-580e-4a33-a851-4538446b7bf5" />
   
# Sikad | Triathlon App (Agentic)  🏊‍♂️🚴‍♂️🏃‍♂️
_Swim. Pedal. Kick. Repeat. Your AI-planned triathlon training, one card at a time._

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white) ![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-fFFFFF?style=for-the-badge&logo=ollama&logoColor=black)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logoColor=white) ![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-007808?style=for-the-badge&logo=ffmpeg&logoColor=white)
![intervals.icu](https://img.shields.io/badge/intervals.icu-API-FF6B2C?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Fly.io](https://img.shields.io/badge/Fly.io-8B5CF6?style=for-the-badge&logo=flydotio&logoColor=white)
![EAS Build](https://img.shields.io/badge/EAS_Build-000020?style=for-the-badge&logo=expo&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

</div>

> BCDE211 Best Programming Practices - JavaScript
>
> `Sikad` is a mobile workout manager for triathletes: build workout cards with looping GIF demos, schedule them on a calendar, tick them off as you train, and let an AI coach agent propose tomorrow's session from your real training data. It pulls swim, bike and run history from intervals.icu and never changes your plan without your approval.
>
> **Name:** *Sikad* is a modern Cebuano/Tagalog root word for "kick" or "pedal". It carries the raw, rhythmic energy of physical propulsion across all three triathlon disciplines.

<div align="center">
   
   ~✦~

   [![Recorded Demo](https://img.shields.io/badge/YouTube-Recorded%20Demo%20-181717?style=for-the-badge&logo=youtube&labelColor=db1c02)]()
   [![Penpot Prototype](https://img.shields.io/badge/Penpot-Prototype-181717?style=for-the-badge&logo=penpot&labelColor=080182)]()

</div>


---

## Branch Notes
- **Branch**: `dev-agentic`  
- **Status**: Work in Progress
- **Release Version**: `v1.3.0`
- **Purpose**: Ongoing integration branch for active development, preparing core features and workflow improvements ahead of the v1.3.0 release.
- **Summary**: Core functionality rebuilt, stale assets removed, and full drill → training workflow implemented.
- **Key Points**: 
   - Rebuilt base app flow; removed unused/stale files across the directory.
   - Added digital timer + segment‑end flag button for Run → Bike → Swim sequence.
   - Implemented drill creation: each completed segment set is saved as a drill.
   - Added training session flow: athlete fills name + location; ID auto‑filled; timestamp captured.
   - Training sessions now saved, displayed in table, and enriched with calculated insights.

Merges into `main` once stable
> `⎇` See [ Branch Info](https://github.com/arzenikos/triathlon-app/wiki) for more information


## Project Structure
<!-- START_STRUCTURE -->
```
sikad/
├─ apps/
│  ├─ mobile/        # Expo app (screens, components, hooks)
│  └─ api/           # Fastify API (routes, services, agent)
├─ packages/
│  └─ shared/        # Zod schemas and types shared by app and API
├─ supabase/         # migrations, RLS policies, seed
├─ docs/             # sikad-uml.drawio
├─ wiki/             # project wiki pages
└─ assets/           # logo
```
<!-- END_STRUCTURE -->

## Features
- **Workout Cards**: Create/edit/delete cards with sets/reps/duration, optional description, URL, and looping GIF demos.
- **Calendar & Sessions**: Schedule workouts, drag to reorder, and view total estimated session duration.
- **Workout Logger**: Check off tasks as completed; optionally record actual reps vs planned.
- **intervals.icu Sync**: Import run/bike/swim activities; export strength workouts as calendar events.
- **Stats Dashboard**: Weekly/monthly totals, adherence, sport‑time breakdown, and training load insights.
- **Agentic Planner**: AI‑powered next‑day session generator with rationale; user reviews and approves.

## Installation and setup
 
### Prerequisites
 
- Node.js 22 LTS and pnpm 9+
- Docker Desktop (local Postgres and ffmpeg via the Supabase CLI and the API image)
- Supabase CLI
- Expo Go on your phone, or an Android emulator / iOS simulator
- An Anthropic API key
- An intervals.icu account with your **athlete ID** and a personal **API key** (Settings, Developer Settings)
- Optional: ffmpeg on your PATH if you run the API outside Docker
### Steps
 
```bash
# 1. Clone and install
git clone https://github.com/<your-username>/sikad.git
cd sikad
pnpm install
 
# 2. Configure environment
cp apps/api/.env.example apps/api/.env
cp apps/mobile/.env.example apps/mobile/.env
 
# 3. Start local Supabase (Postgres + Auth + Storage) and migrate
supabase start
pnpm db:migrate
pnpm db:seed          # sample workouts (optional)
 
# 4. Run the API
pnpm --filter api dev          # http://localhost:8787
 
# 5. Run the mobile app
pnpm --filter mobile start     # scan the QR code with Expo Go
```
 
### Environment variables
 
`apps/api/.env`
 
```
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_SERVICE_ROLE_KEY=...             # server only, never ship to the app
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
ANTHROPIC_API_KEY=...
PLANNER_MODEL=qwen-3-5                    # swap for a cheaper model to save cost
ENCRYPTION_KEY=...                        # 32 bytes base64, encrypts intervals.icu API keys at rest
MAX_VIDEO_MB=50
MAX_VIDEO_SECONDS=10
```
 
`apps/mobile/.env`
 
```
EXPO_PUBLIC_API_URL=http://<your-LAN-IP>:8787
EXPO_PUBLIC_SUPABASE_URL=http://<your-LAN-IP>:54321
EXPO_PUBLIC_SUPABASE_ANON_KEY=...    # anon key only; protected by row level security
```
 
### Useful scripts
 
| Command | What it does |
|---|---|
| `pnpm test` | API unit tests (Vitest) and app tests (Jest) |
| `pnpm lint` | ESLint and TypeScript checks |
| `pnpm --filter api build` | Build the API for Docker |
| `eas build --profile preview` | Build an installable test app |
 

---

> [!WARNING]
>
> ![IMPORTANT_NOTICE-_Academic_Integrity](https://img.shields.io/badge/IMPORTANT_NOTICE-_Academic_Integrity-%23800000.svg?style=for-the-badge&logoColor=white)
> 
> **BCDE211 - Best Programming Practices (Web and Mobile Development)**
> 
> This portfolio contains original work completed as part of my BCDE211 - Best Programming Practices (Web and Mobile Development) course at Ara Institute of Canterbury. I do not condone plagiarism or academic misconduct in any form. This project is for academic purposes only and is not intended to be copied or used without proper authorisation.
> The university has a STRICT policy on academic misconduct, and I fully support this policy. Any attempt to plagiarize, copy, or use this work as your own will result in serious consequences. Please respect academic integrity and do not attempt to pass off this work as your own.
>
> **Disclaimer**
>
> All the content presented here is the result of my own individual work, and any resemblance to other works is purely coincidental. If you are a student, please refrain from using or copying this work in any way that violates the principles of academic honesty and integrity.

---

Created by Arsenie — 2024
