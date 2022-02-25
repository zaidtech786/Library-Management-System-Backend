import React from 'react';
import AdminNav from './AdminNav';
import  "./AddStuCss.css"


const IssueBook = () => {
  return (
  <div>
            {/* <AdminNav /> */}
                <h3 className='title text-center'>ISSUE BOOK</h3>
            <div className="container wrapper" style={{ marginTop: "3%" }}>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Student LibraryId</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  />

                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Category</label>
                        <select class="form-control" >
                            <option>SELECT CATEGORY</option>
                            <option>EDUCATION</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Image</label>
                        <input type="text" class="form-control" id="exampleInputPassword1"  />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Id</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Start Date</label>
                        <input type="date" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">End Date</label>
                        <input type="date" class="form-control" id="exampleInputPassword1"  />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Fine</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" >Issue Book</button>

                </form>
            </div>
        </div>
  )
};

export default IssueBook;
