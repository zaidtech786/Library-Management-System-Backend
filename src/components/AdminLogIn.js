import React,{useState} from 'react';
import Form from "./Form";
import {Link} from "react-router-dom";
import Axios from "axios";
import {useNavigate} from "react-router-dom";

const AdminLogIn = ({setUser}) => {
  const [email,setEmail]=useState();
  const [password,setPassowrd]=useState();

  // Define history hooks
  const Navigate=useNavigate()

  const postData = () => {
    Axios.post("http://localhost:4000/adminsignin",{
      email:email,
      password:password, 
    }).then(res =>{alert(res.data.message)
      setUser(res.data.user)
    });
  }
  return <>
      <div className='formContainer'>
          <div className='form'>
          <h3 className='heading'>Admin Login</h3>
          <label className='label'>Email</label>
           <input type="email" className='input' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
           <br></br>
           <label className='label'>password</label>
           <input type="password" className='input' value={password} placeholder="password" onChange={(e)=>setPassowrd(e.target.value)}/><br/>
           <input type="button" className='button' value="Login" onClick={postData}/>
           <p>New Accont  <Link to="/adminsignup">Sign Up</Link></p>
       
          </div>

        </div>
  </>;
};

export default AdminLogIn;
