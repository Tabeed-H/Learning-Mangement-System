from sqlalchemy.orm import Session , joinedload
from fastapi import HTTPException, status, Depends
from app.api.models.Course import Course
from app.api.models.Student import Student
from app.api.models.Enrollment import Enrollment
from app.api.schemas.Teacher import TeacherResponse
from app.api.schemas.Course import CourseBase, CourseCreate

from uuid import uuid4

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

async def get_course_start(course_id: str, db: Session):
    return db.query(Course).filter(Course.id == course_id).first()

async def get_course(course_id: str, db: Session):
    return db.query(Course).filter(Course.id == course_id).first()

def enroll_student_in_course(db: Session, student_id: str, course_id: str):
    student = db.query(Student).filter(Student.id == student_id).first()
    course = db.query(Course).filter(Course.id == course_id).first()

    if not student or not course:
        return None

    # # Check if the student is already enrolled in the course
    # if any(enrollment.course_id == course_id for enrollment in student.enrollments):
    #     return student

    enrollment = Enrollment(id=str(uuid4()), student_id=student.id, course_id=course.id)
    db.add(enrollment)
    db.commit()
    db.refresh(student)
    return student

def get_student_with_courses(db: Session, student_id: str):
    return db.query(Student).filter(Student.id == student_id).options(
        joinedload(Student.enrollments)
    ).first()
