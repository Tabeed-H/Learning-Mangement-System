# app/models/enrollment.py

from sqlalchemy import Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
from uuid import uuid4
from ...database import Base

class Enrollment(Base):
    __tablename__ = "enrollments"
    id = Column(String, primary_key=True, index=True, default=str(uuid4()))
    student_id = Column(String, ForeignKey('students.id'))
    course_id = Column(String, ForeignKey('courses.id'))
    student = relationship("Student", back_populates="enrollments")
