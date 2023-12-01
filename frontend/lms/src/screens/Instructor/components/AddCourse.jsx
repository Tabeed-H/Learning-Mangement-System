import React, { useState } from "react";
import "./AddCourse.css";

const AddCourseForm = ({ onAddCourse }) => {
  const [courseName, setCourseName] = useState("");
  const [courseInstructor, setCourseInstructor] = useState("");
  const [about, setAbout] = useState("");
  const [material, setMaterial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation can be added here before calling onAddCourse

    // Create a course object with the entered data
    const newCourse = {
      courseName,
      courseInstructor,
      about,
      material,
    };

    // Pass the new course data to the parent component
    onAddCourse(newCourse);

    // Clear the form fields after submission
    setCourseName("");
    setCourseInstructor("");
    setAbout("");
    setMaterial("");
  };

  return (
    <div className="u-container ">
      <h2 className="a-c-tag">Add New Course</h2>
      <div className="seperator"></div>
      <div className="f-container">
        <form onSubmit={handleSubmit}>
          <div className="f-entry">
            <div className="f-label">Course Name:</div>
            <input
              className="f-text"
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Enter Course Name"
            />
          </div>
          <div className="f-entry">
            <div className="f-label">Course Instructor:</div>
            <input
              className="f-text"
              type="text"
              value={courseInstructor}
              onChange={(e) => setCourseInstructor(e.target.value)}
              placeholder="Enter Instructor Name"
            />
          </div>

          <div className="f-entry">
            <div className="f-label">About: </div>
            <textarea
              className="f-text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Enter Course Details"
            />
          </div>
          <div className="f-entry">
            <div className="f-label">Material: </div>
            <input
              type="text"
              className="f-text"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              placeholder="Link to Course Material"
            />
          </div>

          <button type="submit">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
