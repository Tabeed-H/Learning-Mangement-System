# app/main.py

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.api.routers import Router
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine, Base

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Create tables on startup
Base.metadata.create_all(bind=engine)

# Routes
app.include_router(Router.router, prefix='/api/v1', tags=['student'])