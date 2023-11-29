import React, { useState } from "react";
import Header from "./components/Header";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userType, setUserType] = useState("Student");

  const handleSignup = () => {
    console.log({
      username,
      userEmail,
      userPassword,
      userType,
    });
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
