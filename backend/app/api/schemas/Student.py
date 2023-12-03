# app/schemas/student.py

from pydantic import BaseModel
from typing import List, Any
from app.api.schemas.Course import CourseBase


class StudentCreate(BaseModel):
    student_name: str
    email: str
    password: str

class StudentResponse(BaseModel):
    student_name: str
    email: str
    role: str

class StudentAll(BaseModel):
   enrollments: List[Any] = []