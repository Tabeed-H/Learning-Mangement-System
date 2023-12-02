from sqlalchemy.orm import Session 
from fastapi import HTTPException, status, Depends
from fastapi.security import OAuth2PasswordBearer
from app.api.models.Student import Student
from app.api.schemas.Student import StudentCreate
from app.api.dependencies.authentication import verify_password, hash_password
from typing import Annotated
from jose import jwt

async def create_student(db: Session, student: StudentCreate):
    new_student = Student(
        student_name = student.student_name,
        email = student.email,
        password = hash_password(student.password)
    )
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

async def authenticate(db: Session, email: str, password: str):
    user = await get_user_by_email(db, email=email)
    if not user:
        raise HTTPException(
            status_code= status.HTTP_404_NOT_FOUND,
            detail="User Not Found"
        )
    print(user)
    auth_user = verify_password(password, user.password)
    if not auth_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect Password"
        )
    
    return user


async def get_user_by_email(db: Session, email: str):
    return  db.query(Student).filter(Student.email == email).first()

async def get_user_by_id(db: Session, id: str):
    return db.query(Student).filter(Student.id == id).first()