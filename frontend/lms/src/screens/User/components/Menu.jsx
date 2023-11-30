import React from "react";
import "./Menu.css";

const Menu = (props) => {
  const { changePanel } = props;
  return (
    <div className="menu-container">
      <button className="menu-btn" onClick={() => changePanel("user")}>
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </button>
      <button className="menu-btn" onClick={() => changePanel("courses")}>
        <span className="material-symbols-outlined">search</span>Browse Courses
      </button>
    </div>
  );
};

export default Menu;
