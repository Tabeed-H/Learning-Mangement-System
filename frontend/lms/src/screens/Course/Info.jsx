import React, { useState } from "react";
import Header from "./Components/Header";
import Course from "./Components/Course";

import "./Info.css";

const Info = () => {
  const [course, setCourse] = useState({
    _id: 1,
    courseName: "Digital Image Processing",
    courseInstructor: "Dr. Sahil",
    courseDetails:
      "Digital image processing is the use of algorithms and mathematical models to process and analyze digital images. The goal of digital image processing is to enhance the quality of images, extract meaningful information from images, and automate image-based tasks.",
  });
  return (
    <>
      <Header />
      <Course data={course} />
    </>
  );
};

export default Info;
