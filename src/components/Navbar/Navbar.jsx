import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const DarkModeAndLightHandler = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else {
      setMyStyle({
        backgroundColor: "#445760",
        color: "white",
      });
    }
  };

  return (
    <>
      <div style={myStyle} className="navbar navbar-expand-lg">
        <Link style={myStyle} className="navbar-brand" to="/">
          Text Utils
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link style={myStyle} className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link style={myStyle} className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            onClick={DarkModeAndLightHandler}
            className="form-check-input"
            type="checkbox"
            role="switch"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
