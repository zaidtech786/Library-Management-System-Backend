import React from 'react';
import AdminNav from './AdminNav';
import  "./AddStuCss.css"

const AddBooks = () => {
  return (
  <div>
  {/* <AdminNav /> */}
      <h3 className='title text-center'>ADD BOOKS</h3>
  <div className="container wrapper" style={{ marginTop: "3%" }}>
      <form>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Book Id</label>
              <input type="text" class="form-control" />

          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Language</label>
              <input type="text" class="form-control"  />
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Category</label>
              <input type="text" class="form-control"/>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Description</label>
              <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Title</label>
              <input type="text" class="form-control"  />
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Author</label>
              <input type="text" class="form-control"/>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Price</label>
              <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Image</label>
              <input type="text" class="form-control"  />
          </div>
          <br />
          <button type="button" class="btn btn-primary"  >Add Book</button>
      </form>
  </div>
</div>
  )
};

export default AddBooks;
