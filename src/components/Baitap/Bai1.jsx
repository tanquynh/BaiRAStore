import React, { Component } from "react";

class Bai1 extends Component {
  render() {
    const course = ["HTML", "Javacrip", "Pyton", "C#"];
    return (
      <div>
        <div className="listStudent">
          <h1>DANH SÁCH KHÓA HỌC</h1>
          <ul>
            {course.map((Element, index) => (
              <li key={index}>{Element}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Bai1;
