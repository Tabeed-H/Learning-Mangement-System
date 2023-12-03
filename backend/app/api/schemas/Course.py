from pydantic import BaseModel

class CourseBase(BaseModel):
    id:str
    course_name: str
    details: str
    material: str

class CourseCreate(CourseBase):
    teacher_id: str

class CourseNotEnrolled(BaseModel):
    id:str
    course_name: str
    details: str
    teacher_id: str

class CouseEnrolled(CourseNotEnrolled):
    material: str

class CourseID(BaseModel):
    id:str