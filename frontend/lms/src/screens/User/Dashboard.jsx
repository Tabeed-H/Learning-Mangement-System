import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import User from "./components/User";
import List from "../Course/List";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Tabeed",
    email: "tabeed@example.com",
    coursesEnrolled: [
      {
        _id: 1,
        courseName: "Data Mining",
        courseInstructor: "Dr. Zubair",
      },
      {
        _id: 2,
        courseName: "Digital Image Processing",
        courseInstructor: "Dr. Sahil",
      },
    ],
  });

  const [panel, setPanel] = useState("user");

  const handlePanelChange = (opt) => {
    setPanel(opt);
  };
  return (
    <>
      <Header userName={user.name} />
      <Menu changePanel={handlePanelChange} />
      <div className="panel-container">
        {panel === "user" && <User regCourses={user.coursesEnrolled} />}
        {panel === "courses" && <List />}
      </div>
    </>
  );
};

export default Dashboard;
