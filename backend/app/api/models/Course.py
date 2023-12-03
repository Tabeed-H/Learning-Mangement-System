
from sqlalchemy import Column, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from ...database import Base
from uuid import uuid4

class Course(Base):
    __tablename__ = "courses"
    id = Column(String, primary_key=True, default=str(uuid4()), index=True)
    course_name = Column(String, index=True)
    details = Column(Text)
    material = Column(String)
    
    # Relationship with Teacher
    teacher_id = Column(String, ForeignKey('teachers.id'))
    owner = relationship("Teacher", back_populates="courses")

    # Relationship with Student
    # students = relationship("Student", secondary="enrollments", back_populates="courses")
