from fastapi import FastAPI

app = FastAPI(title="Nilima Print - PDF Service")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
