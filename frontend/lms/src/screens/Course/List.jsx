import React, { useState } from "react";
import Card from "../User/components/Card";
import "./List.css";

const List = () => {
  const [courses, setCourses] = useState([
    {
      _id: 1,
      courseName: "Digital Image Processing",
      courseInstructor: "Dr. Sahil",
    },
    {
      _id: 2,
      courseName: "Compiler Design",
      courseInstructor: "Dr. Rouf",
    },
    {
      _id: 3,
      courseName: "Network Security",
      courseInstructor: "Dr. Adil",
    },
    {
      _id: 4,
      courseName: "Computer Graphics",
      courseInstructor: "Dr. Ahsan",
    },
  ]);
  const handleCardEvent = (e) => {
    console.log(e);
  };
  return (
    <div className="c-container">
      <div className="c-header">
        <div className="c-header-tag">Browse New Courses</div>
        <div className="c-header-sub">
          Enroll in courses you would love to learn
        </div>
      </div>
      <div className="seperator"></div>
      <div className="c-cour">
        {courses.map((data, index) => (
          <Card key={index} courseData={data} onAction={handleCardEvent} />
        ))}
      </div>
    </div>
  );
};

export default List;
