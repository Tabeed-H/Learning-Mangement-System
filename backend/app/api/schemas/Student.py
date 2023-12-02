# app/schemas/student.py

from pydantic import BaseModel



class StudentCreate(BaseModel):
    student_name: str
    email: str
    password: str

class StudentResponse(BaseModel):
    student_name: str
    email: str
    role: str
