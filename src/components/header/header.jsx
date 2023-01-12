import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  const handleClick = () => setClick(!click);
  const [click, setClick] = useState();
  return (
    <div>
      <div className="header">
        <nav className="nav_bar">
          <div className="nav_container">
            <div className="logo_container">
              <NavLink to="/">
                <img src="./Images/Ideaology-Logo (1).png" alt="" />
              </NavLink>
            </div>
            <div>
              <ul className={click ? "nav_menu active" : "nav_menu"}>
                <li className="nav_item">
                  <NavLink to="/" className="nav_links" onClick={handleClick}>
                    Home
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink
                    to="/hero"
                    className="nav_links"
                    onClick={handleClick}
                  >
                    Staking
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink
                    to="/whitepaper"
                    className="nav_links"
                    onClick={handleClick}
                  >
                    Vesting
                  </NavLink>
                </li>{" "}
                <li className="nav_item">
                  <NavLink
                    to="/sdks"
                    className="nav_links"
                    onClick={handleClick}
                  >
                    Games
                  </NavLink>
                </li>{" "}
                <li className="nav_item">
                  <NavLink
                    to="/signin"
                    className="nav_links"
                    onClick={handleClick}
                  >
                    Freelancers
                  </NavLink>
                </li>{" "}
                <li className="nav_item">
                  <NavLink
                    to="/signup"
                    className="nav_links"
                    onClick={handleClick}
                  >
                    Contact
                  </NavLink>
                </li>{" "}
                <div className="socials_media_sidebar">
                  <img src="./Images/Vector (3).png" alt="" />
                  <img src="./Images/Vector (4).png" alt="" />
                  <img src="./Images/Vector (5).png" alt="" />
                  <img src="./Images/Vector (6).png" alt="" />
                </div>
              </ul>
            </div>
            <div>
              <div className="socials_media">
                <img src="./Images/Vector (3).png" alt="" />
                <img src="./Images/Vector (4).png" alt="" />
                <img src="./Images/Vector (5).png" alt="" />
                <img src="./Images/Vector (6).png" alt="" />
              </div>
            </div>

            <div className="nav_icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
