import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userType, setUserType] = useState("Student");

  const navigate = useNavigate();
  const handleSignup = async () => {
    if (userType === "Student") {
      handleStudentSignup();
    } else {
      handleTeacherSignup();
    }
  };

  const handleStudentSignup = async () => {
    const data = {
      student_name: username,
      email: userEmail,
      password: userPassword,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/student/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Student created:", result);
        alert("Welcome Student!");
        navigate("/");
      } else {
        console.error("Failed to create student:", response.statusText);
        alert(`Something Went Wrong!`);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleTeacherSignup = async () => {
    const data = {
      teacher_name: username,
      email: userEmail,
      password: userPassword,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/teacher/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Student created:", result);
        alert("Welcome teacher!");
        navigate("/");
      } else {
        console.error("Failed to create student:", response.statusText);
        alert(`Something Went Wrong!`);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Header />

      <div className="login-form">
        <div className="greeting-container">
          <div className="welcome-message">WELCOME</div>
          <div className="signup-option-container">
            Sign Up for a new learning journey
          </div>
        </div>
        <div className="seperator"></div>
        <div className="login-form-container">
          <label className="form-label">Name </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="form-input"
          />
          <label className="form-label">Set Email</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Set Password</label>
          <div className="password-container">
            <div className="password-input-container">
              <input
                type="text"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <label className="form-label">Select Role:</label>
          <select
            id="role"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="form-input"
          >
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>

          <button type="button" onClick={handleSignup} className="login-button">
            <div className="text">Sign Up</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
