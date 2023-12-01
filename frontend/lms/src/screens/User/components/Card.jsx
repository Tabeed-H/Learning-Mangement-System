import React from "react";

const Card = (props) => {
  const { courseData, onAction } = props;

  const handleDetailsButton = () => {
    onAction(courseData._id);
  };
  return (
    <div className="card-container">
      <div className="c-name">{courseData.courseName}</div>
      <div className="c-inst">{courseData.courseInstructor}</div>
      <div className="c-btn" onClick={handleDetailsButton}>
        <div>View Details</div>
      </div>
    </div>
  );
};

export default Card;
