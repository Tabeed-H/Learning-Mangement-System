import React from "react";
import Card from "../../User/components/Card";

const Instructor = (props) => {
  const { courseData, teacher } = props;
  const handleCardEvent = (e) => {
    console.log(e);
  };
  return (
    <div className="u-container">
      <div className="u-tag">
        <div className="u-tag-main">Hello Teacher!</div>
        <div className="u-tag-sub">Manage your added courses.</div>
      </div>
      <div className="seperator"></div>
      <div className="u-reg-cour">
        {courseData.map((data, index) => (
          <Card
            key={index}
            courseData={data}
            onAction={handleCardEvent}
            teacherName={teacher}
          />
        ))}
      </div>
    </div>
  );
};

export default Instructor;
