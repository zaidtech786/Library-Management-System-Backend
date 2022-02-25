import React ,{useState} from 'react';
import AdminNav from './AdminNav';
import "./AddStuCss.css"

const AddStudent = () => {
   
  return(
  <div>
  {/* <AdminNav /> */}
      <h3 className='text-center title '>ADD STUDENT</h3>
  <div className="container wrapper"  style={{ marginTop: "5%" }}>
      <form>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" class="form-control" />

          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Library Id</label>
              <input type="text" class="form-control"  />
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Email</label>
              <input type="email" class="form-control" />
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control"  />
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Address</label>
              <input type="text" class="form-control"  />
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Mobile</label>
              <input type="number" class="form-control" />
          </div>
          <br />
          <button type="button" class="btn btn-primary">Add Student</button>
      </form>
  </div>
</div>
  )
};

export default AddStudent;
