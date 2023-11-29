import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(""); // local copy of email
  const [password, setPassword] = useState(""); // local copy of password

  const navigate = useNavigate(); // for naigation

  // handle navigation to signup page
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
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

          <button type="button" onClick={handleLogin} className="login-button">
            <div className="text">Sign In</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
