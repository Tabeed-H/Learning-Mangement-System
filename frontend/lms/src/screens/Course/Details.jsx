import React, { useState } from "react";
import Header from "./Components/Header";
import AccessCourse from "./Components/AccessCourse";

import "./Info.css";

const Details = () => {
  const [course, setCourse] = useState({
    _id: 1,
    courseName: "Digital Image Processing",
    courseInstructor: "Dr. Sahil",
    courseDetails:
      "Digital image processing is the use of algorithms and mathematical models to process and analyze digital images. The goal of digital image processing is to enhance the quality of images, extract meaningful information from images, and automate image-based tasks.",
    courseMaterial: "No link Provided",
  });
  return (
    <>
      <Header />
      <AccessCourse data={course} />
    </>
  );
};

export default Details;
