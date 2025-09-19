# 🔐 Authentication Backend (Python + FastAPI)

This is a minimal authentication backend built with **FastAPI**, **SQLAlchemy**, and **JWT**.  
It supports **signup** and **login** with hashed passwords.


### 1 Backend

**Prereqs:** Python 3.11+

```bash
# from repo root
python -m venv .venv
# macOS/Linux:
source .venv/bin/activate
# Windows (Powershell):
# .venv\Scripts\Activate.ps1

pip install -U pip
pip install -r requirements.txt

# start API
uvicorn app.main:app --reload --port 8000
# → http://localhost:8000 (Swagger at /docs)
```
