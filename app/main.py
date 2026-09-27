"""Smart Daily Routine — FastAPI app serving Jinja2 pages (UI/UX phase only)."""

import os
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from app.core.mock_data import get_mock_data

BASE_DIR = Path(__file__).resolve().parent
TEMPLATES_DIR = BASE_DIR / "templates"
STATIC_DIR = BASE_DIR / "static"

app = FastAPI(title="Smart Daily Routine")

templates = Jinja2Templates(directory=str(TEMPLATES_DIR))
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")


def _thousands(value: int | float) -> str:
    return f"{value:,}"


templates.env.filters["thousands_separator"] = _thousands

PAGES = [
    ("dashboard", "/"),
    ("today", "/today"),
    ("planner", "/planner"),
    ("goals", "/goals"),
    ("habits", "/habits"),
    ("finance", "/finance"),
    ("health", "/health"),
    ("learning", "/learning"),
    ("notes", "/notes"),
    ("settings", "/settings"),
]


def _ctx(request: Request, page: str) -> dict:
    data = get_mock_data()
    return {
        "request": request,
        "page": page,
        "data": data,
        "nav": PAGES,
        "current_lang": "ar",
    }


@app.get("/", response_class=HTMLResponse)
async def dashboard(request: Request):
    return templates.TemplateResponse("pages/dashboard.html", _ctx(request, "dashboard"))


@app.get("/today", response_class=HTMLResponse)
async def today(request: Request):
    return templates.TemplateResponse("pages/today.html", _ctx(request, "today"))


@app.get("/planner", response_class=HTMLResponse)
async def planner(request: Request):
    return templates.TemplateResponse("pages/planner.html", _ctx(request, "planner"))


@app.get("/goals", response_class=HTMLResponse)
async def goals(request: Request):
    return templates.TemplateResponse("pages/goals.html", _ctx(request, "goals"))


@app.get("/habits", response_class=HTMLResponse)
async def habits(request: Request):
    return templates.TemplateResponse("pages/habits.html", _ctx(request, "habits"))


@app.get("/finance", response_class=HTMLResponse)
async def finance(request: Request):
    return templates.TemplateResponse("pages/finance.html", _ctx(request, "finance"))


@app.get("/health", response_class=HTMLResponse)
async def health(request: Request):
    return templates.TemplateResponse("pages/health.html", _ctx(request, "health"))


@app.get("/learning", response_class=HTMLResponse)
async def learning(request: Request):
    return templates.TemplateResponse("pages/learning.html", _ctx(request, "learning"))


@app.get("/notes", response_class=HTMLResponse)
async def notes(request: Request):
    return templates.TemplateResponse("pages/notes.html", _ctx(request, "notes"))


@app.get("/settings", response_class=HTMLResponse)
async def settings(request: Request):
    return templates.TemplateResponse("pages/settings.html", _ctx(request, "settings"))
