import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({ data, name, _id }) => {
  const navigate = useNavigate();
  const handleEnrollment = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        // Handle case where the user is not authenticated
        console.error("User is not authenticated");
        return;
      }

      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/course/enroll/?course_id=${_id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Success!");
        navigate("/student/dashboard");
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="course-container">
      <div className="course-tag">About This Course</div>
      <div className="seperator"></div>
      <div className="course-name">{data.course_name}</div>
      <div className="course-inst">
        By <span>{name}</span>
      </div>
      <div className="course-details">
        <div className="course-d-tag">Details</div>
        <div className="seperator"></div>
        <div className="course-d">{data.details}</div>
      </div>
      <div className="en-btn" onClick={handleEnrollment}>
        Enroll Now
      </div>
    </div>
  );
};

export default Course;
