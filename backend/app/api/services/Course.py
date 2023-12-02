from sqlalchemy.orm import Session 
from fastapi import HTTPException, status, Depends
from app.api.models.Course import Course
from app.api.schemas.Teacher import TeacherResponse
from app.api.schemas.Course import CourseBase, CourseCreate

async def add_course(data: CourseBase, db: Session, teacher: TeacherResponse):
    new_teacher = Course(
        course_name = data.course_name,
        details = data.details,
        material = data.material,
        teacher_id = teacher.id
    )
    db.add(new_teacher)
    db.commit()
    db.refresh(new_teacher)
    return new_teacher

async def get_all_courses(db: Session, teacher: TeacherResponse):
    return {
        "courses": teacher.courses
    }

async def get_all(db: Session):
    return db.query(Course).all()