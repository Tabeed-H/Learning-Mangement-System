from fastapi import APIRouter, HTTPException, status, Depends
from app.api.services.auth import auth_teacher, auth_student
from app.api.models.Course import Course
from app.api.models.Teacher import Teacher
from app.api.models.Student import Student
from app.api.schemas.Course import CourseBase, CourseID, CourseNotEnrolled, CouseEnrolled
from app.api.schemas.Student import StudentResponse, StudentAll
from app.api.services.Course import add_course, get_all_courses, get_all, get_course_start, get_course, enroll_student_in_course, get_student_with_courses, enroll_student_in_course
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

@course_router.get('/details/', summary="Get Details for unenrolled course", response_model=CourseNotEnrolled)
async def get_fresh_details(id, db: Session = Depends(get_db)):
    return await get_course_start(id, db)

@course_router.get('/details/student/enrolled/', summary="Get Details for enrolled Course", response_model=CouseEnrolled)
async def get_details(id, db: Session = Depends(get_db), student: Student = Depends(auth_student.get_current_user)):
    return await get_course(id, db)


@course_router.get('/details/', summary="Update Course Details", response_model=CouseEnrolled)
async def get_details_teacher(id, db :Session = Depends(get_db), student: Student = Depends(auth_student.get_current_user) ):
    return await get_course(id, db)

@course_router.post("/enroll/", response_model=StudentResponse)
async def enroll_in_course( course_id: str, db: Session = Depends(get_db), student: Student = Depends(auth_student.get_current_user)):
    result = enroll_student_in_course(db, student.id, course_id)
    if not result:
        raise HTTPException(status_code=404, detail="Student or Course not found")
    return result

@course_router.get("/student-courses/")
async def get_student_courses( db: Session = Depends(get_db), student: Student = Depends(auth_student.get_current_user)):
    student = get_student_with_courses(db, student.id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student.enrollments
