import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(""); // local copy of email
  const [password, setPassword] = useState(""); // local copy of password
  const [userType, setUserType] = useState("Student");

  const navigate = useNavigate(); // for naigation

  // handle navigation to signup page
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogin = async () => {
    if (userType === "Student") handleStudentLogin();
    else handleInstructorLogin();
  };

  const handleStudentLogin = async () => {
    console.log("Logging in with:", { email, password });
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/student/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        const accessToken = result.access_token;

        // Store the access token in localStorage
        localStorage.setItem("accessToken", accessToken);

        console.log("Login successful");
        navigate("/student/dashboard");
      } else {
        console.error("Failed to login:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleInstructorLogin = async () => {
    console.log("Logging in with:", { email, password });
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/teacher/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        const accessToken = result.access_token;

        // Store the access token in localStorage
        localStorage.setItem("accessToken", accessToken);

        console.log("Login teacher successful");
        navigate("/instructor/dashboard");
      } else {
        console.error("Failed to login:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <>
      <Header />
      <div className="login-form">
        <div className="greeting-container">
          <div className="welcome-message">WELCOME BACK</div>
          <div className="signup-option-container">
            Don't have a account,{" "}
            <span className="signup-option " onClick={handleSignUpClick}>
              Sign Up
            </span>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="login-form-container">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Password:</label>
          <div className="password-container">
            <div className="password-input-container">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <button type="button" onClick={handleLogin} className="login-button">
            <div className="text">Sign In</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
