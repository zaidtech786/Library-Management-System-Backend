import React from "react";
import HomeNav from "./HomeNav.css";
import AdminLogin from "./AdminLogIn";
import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom'

const HomeNavbar = () => {
  return (
    <>
      <div className=" nav-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Library Management System
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink   
                    to="admin"
                    className="nav-link "
                   
                  >
                    <FaUser /> 
                    Admin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu-active" to="student" className="nav-link ">
                    <FaUserCircle />
                    Student
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <AdminLogin /> */}
    </>
  );
};

export default HomeNavbar;
