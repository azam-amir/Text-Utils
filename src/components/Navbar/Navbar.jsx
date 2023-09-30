import React from "react";
import InputSection from "../InputSection/InputSection";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ padding: 18 }}
      >
        <a className="navbar-brand" href="#">
          Text Utils
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <InputSection />
    </>
  );
}

export default Navbar;
