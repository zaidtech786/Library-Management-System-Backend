import "./App.css";
import react,{useState} from "react"
import HomeNavbar from "./components/HomeNavbar";
import { Route, Routes } from "react-router-dom";
import AdminLogIn from "./components/AdminLogIn";
import AdminSignUp from "./components/AdminSignUp";
import Form from "./components/Form";
import StudentLogin from "./components/StudentLogin";
import StudentSignUp from "./components/StudentSignUp";
import AdminNav from "./components/AdminNav";
import StudentNav from "./components/StudentNav";
import CommonNav from "./components/CommonNav";
import AddStudent from "./components/AddStudent";
import AddBooks from "./components/AddBooks";
import IssueBook from "./components/IssueBook";
import StudentProfile from "./components/StudentProfile";
import DeleteBooks from "./components/DeleteBooks";
import Books from "./components/Books";
import DelStudent from './components/DelStudent';
import SignUp from "./components/SignUp";


function App() {
  // const Navigate=useNavigate()
  const [user,setUser]=useState({})
  return (
    <>
    <HomeNavbar />
       <Routes>
          <Route path="/admin" element={<AdminLogIn setUser={setUser} />} />
         <Route path="/student" element={<StudentLogin />}/>
         <Route path="/studentsignup" element={<StudentSignUp />}/>
         <Route path="/adminsignup" element={<AdminSignUp />}/>
         <Route path="/adminlogin" element={<AdminLogIn setUser={setUser} />}></Route>
         <Route path="/studentlogin" element={<StudentLogin />}/>
         <Route path="/" element={<HomeNavbar />}/>
         <Route path="/issuebooks" element={<IssueBook />}/>
         <Route path="/addbooks" element={<AddBooks />}/>
         <Route path="/addstudent" element={<AddStudent />}/>
         <Route path="/deletebooks" element={<DeleteBooks />}/>
         <Route path="/studentnav" element={<StudentNav />}/>
         <Route >
         user && user._id ?  <Route path="/adminnav" element={<AdminNav/>} ></Route> :  <Route path="/adminlogin" element={<AdminLogIn setUser={setUser} />} ></Route>
         </Route>
         <Route path="/books" element={<Books />}/>
         <Route path="/deletestudent" element={<DelStudent />}/>
         <Route path="/viewbooks" element={<Books />}/>
      </Routes>   
    </>
  );
}

export default App;