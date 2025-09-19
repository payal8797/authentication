from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models, db
from .routes import users

models.Base.metadata.create_all(bind=db.engine)

app = FastAPI(title="Auth API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: replace with explicit origins in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(users.router, prefix="/auth", tags=["auth"])
