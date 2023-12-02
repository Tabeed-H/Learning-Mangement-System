from pydantic import BaseModel
from app.api.schemas.Course import CourseBase
from typing import List, Optional

class TeacherCreate(BaseModel):
    teacher_name: str
    email: str
    password: str

class TeacherResponse(BaseModel):
    id: str
    teacher_name: str
    email: str
    role: str
    courses: List[CourseBase] = []

