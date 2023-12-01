import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";

import "./User.css";

const User = (props) => {
  const { regCourses } = props;
  const navigate = useNavigate();
  const handleCardEvent = (e) => {
    navigate(`/course/details/${e}`);
  };
  return (
    <div className="u-container">
      <div className="u-tag">
        <div className="u-tag-main">Hello Learner!</div>
        <div className="u-tag-sub">Continue Your Learning.</div>
      </div>
      <div className="seperator"></div>
      <div className="u-reg-cour">
        {regCourses.map((data, index) => (
          <Card key={index} courseData={data} onAction={handleCardEvent} />
        ))}
      </div>
    </div>
  );
};

export default User;
