// import React,{useState} from 'react';
// import {NavLink} from "react-router-dom";
// import "./SignUp.css";
// import { Params } from 'react-router-dom';

// const SignUp = (props) => {
//   const [user,setUser]=useState({
//     fName:"",
//     lName:"",
//     Mno:"",
//     email:"",
//     lNo:"",
//     Password:"",
//     cPassword:"",
//   });
   
//   const handleChange = (e) => {
//     const {name,value }=e.target;
//     setUser({
//       ...user,
//       [name]:value
//     })
//   }
//   return(
//   <>
//       <div className='formCont'>
//           <div className='form-cont'>
//           <h3 className='Title'>{props.name}</h3>
           
//            <div className='input_field'>
//            <label className='label'>First Name</label><br/>
//            <input type="text" name="fName" value={user.fName} onChange={ handleChange} className='inputUser' placeholder="First Name"/>
//            </div>
                
//            <div className='input_field'>
//            <label className='label'>Last name</label><br/>
//            <input type="text"name="lName" value={user.lName} onChange={handleChange}  className='inputUser' placeholder="Last Name"/>
//            </div>
          
//            <div className='input_field'>
//           <label className='label'>Email</label><br/>
//            <input type="email" name="email" value={user.email} onChange={handleChange} className='inputUser' placeholder="Email"/>
//            </div>
             
//            <div className='input_field'>
//            <label className='label'>Phone No</label><br/>
//            <input type="number" name="Mno" value={user.Mno} onChange={handleChange}  className='inputUser' placeholder="+91 1234 5678 90"/>
//            </div>
                  
//            <div className='input_field'>
//            <label className='label'>Library No</label><br/>
//            <input type="number" name="lNo" value={user.lNo} onChange={handleChange} className='inputUser' placeholder="Library No"/>
//            </div>
           
//            <div className='input_field'>
//            <label className='label'>password</label><br/>
//            <input type="password" name="password" value={user.Password} onChange={handleChange}  className='inputUser' placeholder="password"/>
//            </div>
           
//            <div className='input_field'>
//            <label className='label'>Confirm Password</label><br/>
//            <input type="text" name="cpassword" value={user.cPassword} onChange={handleChange} className='inputUser' placeholder="Confirm Password"/>
//            </div>
//            <input type="button" className='buttonbtn' value="Sign Up"/>
//            <p>Already Have an account  <NavLink to={props.visit}>Sign in</NavLink></p>
       
//           </div>

//         </div>
//   </>
//   )
// };

// export default SignUp;
