import React from "react";

const Card = (props) => {
  const { courseData, onAction, teacherName } = props;

  const handleDetailsButton = () => {
    onAction(courseData.id);
  };
  return (
    <div className="card-container">
      <div className="c-name">{courseData.course_name}</div>
      <div className="c-inst">{teacherName || "Click to View Details"}</div>
      <div className="c-btn" onClick={handleDetailsButton}>
        <div>View Details</div>
      </div>
    </div>
  );
};

export default Card;
