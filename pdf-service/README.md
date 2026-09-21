# pdf-service

Python (FastAPI) service that will handle merging PDF files/folders. Currently
just a skeleton with a health check endpoint — merge logic is not implemented
yet.

## Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run (dev)

```bash
source .venv/bin/activate
uvicorn app.main:app --reload --port 8000
```
