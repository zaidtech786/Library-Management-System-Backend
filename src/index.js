import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import HomeNavbar from "./components/HomeNavbar"
// import AdminLogIn from "./components/AdminLogIn"
// import AdminSignUp from "./components/AdminSignUp"
// import Form from "./components/Form";
// import StudentLogin from "./components/StudentLogin";
// import StudentSignUp from "./components/StudentSignUp";

// import HomeNavbar from "./components/HomeNavbar";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
   <BrowserRouter>
      <App/>  
   </BrowserRouter>,

   document.getElementById('root')
);
