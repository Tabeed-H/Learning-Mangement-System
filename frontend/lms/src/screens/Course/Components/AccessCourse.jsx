import React from "react";

const AccessCourse = ({ data }) => {
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
      <div className="course-mat">
        <div className="course-mat-tag">Material For This Course</div>
        <div className="seperator"></div>
        <div className="course-mat-link">{data.courseMaterial}</div>
      </div>
    </div>
  );
};

export default AccessCourse;
