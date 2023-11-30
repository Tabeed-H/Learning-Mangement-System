import React from "react";
import Card from "./Card.jsx";
import "./User.css";

const User = (props) => {
  const { regCourses } = props;
  return (
    <div className="u-container">
      <div className="u-tag">
        <div className="u-tag-main">WELCOME BACK!</div>
        <div className="u-tag-sub">Continue Your Learning.</div>
      </div>
      <div className="seperator"></div>
      <div className="u-reg-cour">
        {regCourses.map((data, index) => (
          <Card key={index} courseData={data} />
        ))}
      </div>
    </div>
  );
};

export default User;
