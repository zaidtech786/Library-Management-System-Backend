import React from 'react';
import AdminNav from './AdminNav';
import  "./AddStuCss.css"

const DelStudent = () => {
  return (
  <div>
  {/* <AdminNav /> */}
      <h3 className='title text-center'>Delete Student</h3>
  <div className="container wrapper" style={{ marginTop: "3%" }}>
      <form>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Student Name</label>
              <input type="text" class="form-control" />

          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Library Id</label>
              <input type="text" class="form-control"  />
          </div>
        
          <button type="button" class="btn btn-primary"  >Delete Student</button>
      </form>
  </div>
</div>
  )
};

export default DelStudent;
