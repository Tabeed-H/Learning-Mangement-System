from fastapi import APIRouter
from app.api.routers import Student
from app.api.routers import Teacher
from app.api.routers import Course

router = APIRouter()

router.include_router(Student.student_router, prefix='/student', tags=['student'])
router.include_router(Teacher.teacher_router, prefix='/teacher', tags=['teacher'])
router.include_router(Course.course_router, prefix='/course', tags=['course'])