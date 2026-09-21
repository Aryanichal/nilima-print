# nilima-print

Internal tools for Nilima Print employees. First feature planned: merging PDF
files/folders into a single document.

## Structure

- `web/` — employee-facing app (Next.js + TypeScript + Tailwind CSS)
- `pdf-service/` — Python (FastAPI) service that will handle PDF merging.
  Currently a skeleton (health check only, no merge logic yet)

## Getting started

### Web app

```bash
cd web
npm install
npm run dev
```

Runs at http://localhost:3000.

### PDF service

```bash
cd pdf-service
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Development

- Node version is pinned in `.nvmrc` (use `nvm use`)
- `web/` uses ESLint + Prettier (`npm run lint`, `npm run format`)
- `pdf-service/` uses Ruff for linting/formatting (`ruff check .`, `ruff format .`)
- A pre-commit hook (Husky + lint-staged) runs these automatically on staged files
- CI (`.github/workflows/ci.yml`) lints and builds both projects on every PR
