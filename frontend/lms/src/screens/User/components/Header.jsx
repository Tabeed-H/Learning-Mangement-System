import React from "react";

import "./Header.css";

const Header = (props) => {
  const { userName } = props;
  return (
    <div className="ud-header-container">
      <div className="ud-header-logo">
        <div className="ud-logo">Learning</div>
      </div>
      <div className="ud-header-user-container">
        <div className="ud-u-name">hi, {userName}</div>
        <div className="ud-u-img"></div>
      </div>
    </div>
  );
};

export default Header;
