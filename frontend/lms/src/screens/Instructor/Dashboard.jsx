import React, { useState, useEffect } from "react";
import Header from "../User/components/Header";
import Menu from "./components/Menu";
import Instructor from "./components/Instructor";
import AddCourse from "./components/AddCourse";
import "./Dashboard.css";

const IDashboard = (prop) => {
  const [user, setUser] = useState({});
  const [panel, setPanel] = useState("instructor");
  const [courses, setCourses] = useState([]);

  const handlePanelChange = (opt) => {
    setPanel(opt);
  };
  const handleCourseAddition = async (obj) => {
    const data = {
      course_name: obj.courseName,
      teacher_id: user.id,
      details: obj.about,
      material: obj.material,
    };
    console.log(data);

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        // Handle case where the user is not authenticated
        console.error("User is not authenticated");
        return;
      }
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/course/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Course Added");
        getTeacherCourses();
      } else {
        console.error("Failed to create Course:", response.statusText);
        alert(`Something Went Wrong!`);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const fetchUserData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        // Handle case where the user is not authenticated
        console.error("User is not authenticated");
        return;
      }

      const response = await fetch("http://127.0.0.1:8000/api/v1/teacher/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setUser(result);
      } else {
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const getTeacherCourses = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        // Handle case where the user is not authenticated
        console.error("User is not authenticated");
        return;
      }

      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/course/getAllofTeacher",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setCourses(result.courses);
        console.log(user.teacher_name);
      } else {
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
    getTeacherCourses();
  }, []);

  return (
    <div className="i-d-container">
      <Header userName={user.teacher_name} />
      <Menu changePanel={handlePanelChange} />
      <div className="panel-container">
        {panel === "instructor" && (
          <Instructor courseData={courses} teacher={user.teacher_name} />
        )}
        {panel === "add" && <AddCourse onAddCourse={handleCourseAddition} />}
      </div>
    </div>
  );
};

export default IDashboard;
