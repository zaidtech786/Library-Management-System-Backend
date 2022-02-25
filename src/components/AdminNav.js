import React from 'react';
import "./SignUp.css"
import { IoMdLogOut } from 'react-icons/io';
import { NavLink } from 'react-router-dom'

const AdminNav = () => {
  return(
      
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-center" href="#">Library Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            View
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">View Student</a></li>
            <li><NavLink className="dropdown-item" to="viewbooks">View Books</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="issuebooks">Issue Book</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ADD
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="addstudent">Add Student</NavLink></li>
            <li><NavLink className="dropdown-item" to="addbooks">Add Books</NavLink></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Delete
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="deletestudent">Delete Student</NavLink></li>
            <li><NavLink className="dropdown-item" to="deletebooks">Delete Books</NavLink></li>
          </ul>
        </li>

        <li className="nav-item">
          <a activeClassName="menu-active" className="nav-link" href="homenavbar"><IoMdLogOut/>LogOut</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    ) 
      
};

export default AdminNav;
