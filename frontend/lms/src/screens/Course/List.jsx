import React, { useEffect, useState } from "react";
import Card from "../User/components/Card";
import { useNavigate } from "react-router-dom";
import "./List.css";

const List = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        // Handle case where the user is not authenticated
        console.error("User is not authenticated");
        return;
      }
      console.log("HIT");
      const response = await fetch("http://127.0.0.1:8000/api/v1/course/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setCourses(result);
        console.log(result);
      } else {
        console.error("Failed to fetch Course:", response.statusText);
        alert(`Something Went Wrong!`);
      }
    } catch (e) {
      console.error("Failed to fetch Course:", response.statusText);
      alert(`Something Went Wrong!`, e.message);
    }
  };

  const navigate = useNavigate();
  const handleCardEvent = (e) => {
    navigate(`/course/info/${e}`);
  };

  useEffect(() => {
    getCourses();
  }, []);
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
