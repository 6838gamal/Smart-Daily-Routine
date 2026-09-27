# Smart Daily Routine

A modern personal life management app — manage your day, goals, habits, finances, health, learning, and notes from one place.

> **Current phase: UI / UX only.** This phase focuses on building complete, connected, presentable interfaces using Mock Data and simple frontend interactions. Business logic, database, and APIs are deferred to a later phase.

---

## Idea

A single, premium, minimal app to manage your personal life — not an admin dashboard. It brings together your daily routine, tasks, planner, goals, habits, finances, health, learning, and notes into one cohesive experience.

## Current Scope

This phase delivers the **full frontend** of the app:

- FastAPI is used only to serve Jinja2 pages.
- All data is **Mock Data** rendered server-side or client-side.
- Simple frontend interactions (theme toggle, language toggle, navigation, tabs, modals) using Vanilla JavaScript.
- No backend business logic, no database, no authentication, no APIs.

### Pages included

| Page | Description |
|------|-------------|
| Dashboard | Greeting, date, today's progress, routine, tasks, goals progress, habits, weekly overview, quick actions |
| Today | Timeline of the day with tasks, events, and habits |
| Planner | Day / Week / Month views with calendar, timeline, and goals |
| Goals | Personal goals with progress, deadline, and milestones |
| Habits | Daily & weekly habits with completion, streak, and weekly progress |
| Finance | Balance, income, expenses, savings, budgets, categories (mock) |
| Health | Sleep, water, exercise, weight, mood (mock) |
| Learning | Courses, books, skills, study progress |
| Notes | Simple notes with categories |
| Settings | Profile, appearance, language, preferences |

### Design

- Modern, clean, premium, minimal — a personal productivity app.
- Mobile-first and fully responsive (mobile, tablet, desktop).
- Bottom navigation on mobile, sidebar on desktop.
- Dark / Light mode via CSS variables + LocalStorage.
- Arabic / English with RTL / LTR support.
- Cards, progress bars, timeline, calendar, simple charts.

## Tech Stack

- **Python 3.12+**
- **FastAPI** (serving Jinja2 pages only in this phase)
- **Jinja2** templates
- **HTML / CSS / Vanilla JavaScript**
- **Docker + Docker Compose**
- **Modular Monolith** architecture

## Architecture

```
app/
├── main.py              # FastAPI app — serves Jinja2 pages only
├── core/
│   └── mock_data.py     # Mock data for all pages
├── templates/           # Jinja2 templates (base + pages)
├── static/
│   ├── css/             # Design system + components
│   ├── js/              # Theme, language, navigation, interactions
│   └── images/
└── components/          # Reusable Jinja2 partials
```

## Future Modules (documented only — not implemented)

| Module | Future Requirements |
|--------|---------------------|
| Planner | Day/Week/Month planning, recurring events, drag-and-drop, reminders. |
| Goals | Goal CRUD, milestones, deadlines, progress tracking, linking to tasks/habits. |
| Habits | Habit CRUD, daily/weekly tracking, streaks, reminders, analytics. |
| Finance | Accounts, transactions, budgets, categories, savings goals, reports, recurring transactions. |
| Health | Sleep, water, exercise, weight, mood tracking, trends, integrations. |
| Learning | Courses, books, skills, study sessions, progress, deadlines. |
| Notes | Notes CRUD, categories, tags, search, rich text, attachments. |
| Journal | Daily journaling, mood, prompts, search. |
| Reminders | Time-based reminders, push notifications, snooze. |
| Notifications | In-app + push notifications, digest, preferences. |
| Analytics | Cross-module insights, weekly/monthly reports, trends. |
| AI Assistant | Natural language task/goal/habit creation, smart suggestions, summaries. |
| Authentication | Email/password, social login, sessions, profile management. |

## Roadmap

1. **Phase 1 (current)** — UI/UX: all pages, design system, mock data, interactions. ✅
2. **Phase 2** — Database schema, models, migrations, authentication.
3. **Phase 3** — Backend APIs, business logic, services, repositories.
4. **Phase 4** — Reminders, notifications, analytics.
5. **Phase 5** — AI assistant, integrations, advanced reporting.

## Running

```bash
docker compose up --build
# visit http://localhost:8000
```

Or locally:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```
# Smart-Daily-Routine
