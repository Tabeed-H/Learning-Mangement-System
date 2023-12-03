import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Components/Header";
import AccessCourse from "./Components/AccessCourse";

import "./Info.css";

const Details = () => {
  const [course, setCourse] = useState({});
  const [teacher, setTeacher] = useState("");
  const { id } = useParams();
  const getDetails = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        // Handle case where the user is not authenticated
        console.error("User is not authenticated");
        return;
      }

      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/course/details/student/enrolled/?id=${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setCourse({});
        setCourse(result);
        getTeacher(result.teacher_id);
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const getTeacher = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/teacher/single/?id=${id}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const result = await response.json();
        setTeacher(result.teacher_name);
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <Header />
      <AccessCourse data={course} name={teacher} />
    </>
  );
};

export default Details;
