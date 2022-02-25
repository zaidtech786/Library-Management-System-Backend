import React from 'react';
import StudentNav from "./StudentNav"
const StudentProfile = () => {
  return (
    <div>
        {/* <StudentNav/> */}
        <div className="container">
            <h3>STUDENT PROFILE</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"  />

                </div>
                <div className="mb-3">
                    <label className="form-label">Library Id</label>
                    <input type="text" className="form-control"  />

                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="number" className="form-control" aria-describedby="emailHelp" />

                </div>
            </form>
        </div>
    </div>
)
};

export default StudentProfile;
