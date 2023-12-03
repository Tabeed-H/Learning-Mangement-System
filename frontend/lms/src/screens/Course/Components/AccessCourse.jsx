import React from "react";

const AccessCourse = ({ data, name }) => {
  return (
    <div className="course-container">
      <div className="course-tag">About This Course</div>
      <div className="seperator"></div>
      <div className="course-name">{data.course_name}</div>
      <div className="course-inst">
        By <span>{name}</span>
      </div>
      <div className="course-details">
        <div className="course-d-tag">Details</div>
        <div className="seperator"></div>
        <div className="course-d">{data.details}</div>
      </div>
      <div className="course-mat">
        <div className="course-mat-tag">Material For This Course</div>
        <div className="seperator"></div>
        <div className="course-mat-link">{data.material}</div>
      </div>
    </div>
  );
};

export default AccessCourse;
