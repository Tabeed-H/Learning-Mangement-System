from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.api.schemas.Teacher import TeacherCreate, TeacherResponse
from app.api.services import Teacher
from app.api.dependencies.authentication import generate_token
from app.api.services.auth import auth_teacher
from typing import Any 

teacher_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@teacher_router.post('/create', summary='Add New Instructor', response_model=TeacherResponse)
async def add_teacher(data: TeacherCreate, db: Session = Depends(get_db)):
    return await Teacher.create_teacher(db, data)

@teacher_router.post('/login', summary="Login user")
async def login_user(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)) -> Any:
    user = await Teacher.authenticate(db, email = form_data.username, password = form_data.password)
    if not user:
        raise HTTPException(
            status_code= status.HTTP_404_NOT_FOUND,
            detail="Incorrect Email or Password"
        )
    return {
        "access_token" : generate_token(user.id)
    }

@teacher_router.get('/', summary="Get Current User Info", response_model=TeacherResponse)
async def get_user(teacher: Teacher = Depends(auth_teacher.get_current_user)):
    return teacher

@teacher_router.get('/single/', summary="Get teacher by id", response_model=TeacherResponse)
async def get_Teacher(id: str, db : Session = Depends(get_db)):
    return await Teacher.get_user_by_id(db, id)