from fastapi import APIRouter, HTTPException, status, Depends
from app.api.services.auth import auth_teacher, auth_student
from app.api.models.Course import Course
from app.api.models.Teacher import Teacher
from app.api.models.Student import Student
from app.api.schemas.Course import CourseBase
from app.api.services.Course import add_course, get_all_courses, get_all
from sqlalchemy.orm import Session 
from app.database import SessionLocal

course_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@course_router.post('/create', summary="Creates Course")
async def create_course(data: CourseBase, db: Session = Depends(get_db), teacher: Teacher = Depends(auth_teacher.get_current_user)):
    return await add_course(data, db, teacher)

@course_router.get('/getAllofTeacher', summary="All Courses by Teacher")
async def get_courses(db: Session = Depends(get_db), teacher: Teacher = Depends(auth_teacher.get_current_user)):
    return await get_all_courses(db, teacher)

@course_router.get('/all', summary="get All Courses")
async def get_all_in_DB(db: Session = Depends(get_db),student : Student = Depends(auth_student.get_current_user) ):
    return await get_all(db)