import React from "react";

const Menu = (props) => {
  const { changePanel } = props;
  return (
    <div className="menu-container">
      <button className="menu-btn" onClick={() => changePanel("instructor")}>
        <span className="material-symbols-outlined">home</span>
        <span>Manage Courses</span>
      </button>
      <button className="menu-btn" onClick={() => changePanel("add")}>
        <span className="material-symbols-outlined">search</span>Add Courses
      </button>
    </div>
  );
};

export default Menu;
