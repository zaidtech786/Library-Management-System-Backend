import React from 'react';
import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom'
import css from "./HomeNav.css"

const StudentNav = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" to="studentnav">Library Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" to="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="books">Your Books</Link>
        </li>
        <li className="nav-item">
          <a  className="nav-link" className="nav-link" href="#">Notifications</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" className="nav-link" href="#">Feedback</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" className="nav-link" href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" className="nav-link" href="homenavbar"><IoMdLogOut/>LogOut</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
  )
};

export default StudentNav;
