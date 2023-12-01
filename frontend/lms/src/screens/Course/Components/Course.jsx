import React from "react";

const Course = ({ data }) => {
  return (
    <div className="course-container">
      <div className="course-tag">About This Course</div>
      <div className="seperator"></div>
      <div className="course-name">{data.courseName}</div>
      <div className="course-inst">
        By <span>{data.courseInstructor}</span>
      </div>
      <div className="course-details">
        <div className="course-d-tag">Details</div>
        <div className="seperator"></div>
        <div className="course-d">{data.courseDetails}</div>
      </div>
      <div className="en-btn">Enroll Now</div>
    </div>
  );
};

export default Course;
