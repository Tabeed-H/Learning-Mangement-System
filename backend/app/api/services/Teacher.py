from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.api.models.Teacher import Teacher
from app.api.schemas.Teacher import TeacherCreate
from app.api.dependencies.authentication import hash_password, verify_password


async def create_teacher(db: Session, teacher: TeacherCreate):
    new_teacher = Teacher(
        teacher_name= teacher.teacher_name,
        email= teacher.email,
        password= hash_password(teacher.password)
    )
    db.add(new_teacher)
    db.commit()
    db.refresh(new_teacher)
    return new_teacher

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
    return  db.query(Teacher).filter(Teacher.email == email).first()

async def get_user_by_id(db: Session, id: str):
    return db.query(Teacher).filter(Teacher.id == id).first()