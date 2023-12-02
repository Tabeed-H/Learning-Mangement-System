# app/models/student.py

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from uuid import uuid4, UUID
from ...database import Base

class Student(Base):
    __tablename__ = "students"
    id = Column(String, default=str(uuid4()) , primary_key=True)
    student_name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    role = Column(String, default="student")  
    password = Column(String)
