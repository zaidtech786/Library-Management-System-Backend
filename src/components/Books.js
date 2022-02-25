import React, { useState } from "react";
// import c from "./images/c.jpg";
import  "./notes.css";
import bookData from "./BookData";
import IssueBook from "./IssueBook";

const Books = () => {
  const [data, setData] = useState(bookData);
  console.log(bookData);
  return (
    <>
      <div className="container">
        {data.map((curElem) => {
          const { id, img, heading, para, button } = curElem;
          return (
            <div className="card">
              <img src={img} className="img" alt={heading} />
              <div className="body">
                <h4 className="titlee text-center">{heading}</h4>
                <p className="para">{para}</p>
                <a href="#" className="btn btn-primary">
                  Issue Book
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;





