from pydantic import BaseModel

class CourseBase(BaseModel):
    course_name: str
    details: str
    material: str

class CourseCreate(CourseBase):
    teacher_id: str

class CourseNotEnrolled(BaseModel):
    cour_name: str
    details: str
    teacher_id: str

class CouseEnrolled(CourseNotEnrolled):
    material: str