import React from 'react';
import AdminNav from './AdminNav';
import"./AddStuCss.css"


const DeleteBooks = () => {
  return (
    <div>
        {/* <AdminNav /> */}
        <div className="container wrapper" style={{ marginTop: "3%" }}>
            <div className="card">
                <h4>DELETE BOOKS</h4>
                <div class="mb-3">
                    <label className="form-label">Select Category</label>
                    <select className="form-control">
                        <option>SELECT CATEGORY</option>
                        <option>EDUCATION</option>
                    </select>
                </div>
                <br />
                <button type="button" className="btn btn-primary" >Get</button>
            </div>
        </div>
       
    </div>
)
};

export default DeleteBooks;
