from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from uuid import uuid4
from ...database import Base

class Teacher(Base):
    __tablename__ = "teachers"
    id =  Column(String, default=str(uuid4()), primary_key=True)
    teacher_name =  Column(String, index=True)
    email =  Column(String, unique=True, index=True)
    role = Column(String, default='teacher')
    password = Column(String)
     # Relationship with Course
    courses = relationship("Course", back_populates="owner")