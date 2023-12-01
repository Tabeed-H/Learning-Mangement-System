import React, { useState } from "react";
import Header from "../User/components/Header";
import Menu from "./components/Menu";
import Instructor from "./components/Instructor";
import AddCourse from "./components/AddCourse";
import "./Dashboard.css";

const IDashboard = (prop) => {
  const [user, setUser] = useState({
    id: 1,
    name: "Tabeed",
    email: "tabeed@example.com",
    cousrses: [
      {
        _id: 1,
        courseName: "Programming in C",
      },
      {
        _id: 2,
        courseName: "Java Programming",
      },
    ],
  });

  const [panel, setPanel] = useState("instructor");

  const handlePanelChange = (opt) => {
    setPanel(opt);
  };
  const handleCourseAddition = (details) => {
    console.log("New Course Added");
    console.log(details);
  };

  return (
    <div className="i-d-container">
      <Header userName={user.name} />
      <Menu changePanel={handlePanelChange} />
      <div className="panel-container">
        {panel === "instructor" && <Instructor courseData={user.cousrses} />}
        {panel === "add" && <AddCourse onAddCourse={handleCourseAddition} />}
      </div>
    </div>
  );
};

export default IDashboard;
