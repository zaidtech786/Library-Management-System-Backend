// import React,{useState} from 'react';
// import "./Form.css";
// import AdminSignUp from "./AdminSignUp";
// import StudentLogin from "./StudentLogin";
// import StudentSignUp from "./StudentSignUp";
// import StudentNav from "./StudentNav";
// import {Link} from "react-router-dom";
// import {AiFillEye} from "react-icons/ai";

// const Form = (props) => {
//   const [email,setEmail]=useState();
//   const [password,setPassowrd]=useState();

//   const postData = () => {
//     console.log(email + password)
//   }
//   return (
//      <>
//         <div className='formContainer'>
//           <div className='form'>
//           <h3 className='heading'>{props.name}</h3>
//           <label className='label'>Email</label>
//            <input type="email" className='input' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
//            <br></br>
//            <label className='label'>password</label>
//            <input type="password" className='input' value={password} placeholder="password" onChange={(e)=>setPassowrd(e.target.value)}/><br/>
//            <input type="button" className='button' value="Login" onClick={postData}/>
//            <p>New Accont  <Link to={props.visit}>Sign Up</Link></p>
       
//           </div>

//         </div>
//      </>
//   )
// }

// export default Form;
