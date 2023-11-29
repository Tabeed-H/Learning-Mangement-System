import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  // handle navigation to signup page
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <div className="logo">Learning</div>
        </div>
        <div className="options-container">
          <div className="options">Help</div>
          <div className="options">Contact Us</div>
          <div className="options special" onClick={handleSignUpClick}>
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
