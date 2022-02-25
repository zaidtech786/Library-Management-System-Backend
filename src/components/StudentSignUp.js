import React,{useState} from 'react';
import SignUp from "./SignUp";
import {NavLink} from "react-router-dom";
import Axios from "axios";

const StudentSignUp = () => {
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    Mobileno:"",
    email:"",
    libraryNo:"",
    Password:"",
    cPassword:"",
  });
   
  const handleChange = (e) => {
    const {name,value }=e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const postData= () => {
      // console.log(user.firstName+user.lastName+user.email+user.Mobileno+user.libraryNo+user.Password+user.cPassword)
      const {firstName,lastName,Mobileno,email,libraryNo,Password,cPassword}=user
      if (firstName && lastName && Mobileno && email && libraryNo && Password && (Password===cPassword) ) {
        Axios.post("http://localhost:4000/studentsignup",{
          firstName,
          lastName,
          Mobileno,
          email,
          libraryNo,
          Password,
        }).then( res=> alert(res.data.message))
      }
      else{
       alert("Invalid Input")
      }
    }
  return <>
    {/* <SignUp name="Student SignUp" rno="Roll No" visit="/studentlogin" /> */}
    <div className='formCont'>
          <div className='form-cont'>
          <h3 className='Title'>Student SignUp</h3>
           
           <div className='input_field'>
           <label className='label'>First Name</label><br/>
           <input type="text" name="firstName" value={user.firstName} onChange={ handleChange} className='inputUser' placeholder="First Name"/>
           </div>
                
           <div className='input_field'>
           <label className='label'>Last name</label><br/>
           <input type="text"name="lastName" value={user.lastName} onChange={handleChange}  className='inputUser' placeholder="Last Name"/>
           </div>
          
           <div className='input_field'>
          <label className='label'>Email</label><br/>
           <input type="email" name="email" value={user.email} onChange={handleChange} className='inputUser' placeholder="Email"/>
           </div>
             
           <div className='input_field'>
           <label className='label'>Phone No</label><br/>
           <input type="number" name="Mobileno" value={user.Mobileno} onChange={handleChange}  className='inputUser' placeholder="+91 1234 5678 90"/>
           </div>
                  
           <div className='input_field'>
           <label className='label'>Library No</label><br/>
           <input type="number" name="libraryNo" value={user.libraryNo} onChange={handleChange} className='inputUser' placeholder="Library No"/>
           </div>
           
           <div className='input_field'>
           <label className='label'>password</label><br/>
           <input type="password" name="Password" value={user.Password} onChange={handleChange}  className='inputUser' placeholder="password"/>
           </div>
           
           <div className='input_field'>
           <label className='label'>Confirm Password</label><br/>
           <input type="text" name="cPassword" value={user.cPassword} onChange={handleChange} className='inputUser' placeholder="Confirm Password"/>
           </div>
           <input type="button" className='buttonbtn' value="Sign Up" onClick={postData}/>
           <p>Already Have an account  <NavLink to="/studentlogin">Sign in</NavLink></p>
       
          </div>

        </div>
  </>;
};

export default StudentSignUp;
