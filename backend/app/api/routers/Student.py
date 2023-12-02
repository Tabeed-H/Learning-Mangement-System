from fastapi import FastAPI, APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session 
from app.database import SessionLocal
from app.api.schemas.Student import StudentCreate, StudentResponse
from fastapi.security import OAuth2PasswordRequestForm
from app.api.services import Student
from app.api.dependencies.authentication import generate_token
from typing import Any
from app.api.services.auth import auth_student

student_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@student_router.post('/create', summary="Create New User", response_model=StudentResponse)
async def add_student(data: StudentCreate ,db: Session = Depends(get_db)):
    return await Student.create_student(db, data)


@student_router.post('/login', summary="Login user")
async def login_user(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)) -> Any:
    user = await Student.authenticate(db, email = form_data.username, password = form_data.password)
    if not user:
        raise HTTPException(
            status_code= status.HTTP_404_NOT_FOUND,
            detail="Incorrect Email or Password"
        )
    return {
        "access_token" : generate_token(user.id)
    }

@student_router.get('/', summary="Get Current User Info", response_model=StudentResponse)
async def get_user(student: Student = Depends(auth_student.get_current_user)):
    return student