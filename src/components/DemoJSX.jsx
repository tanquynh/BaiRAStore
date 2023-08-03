// rcc
import React, { Component } from "react";
import "./DemoJSX.css";

class DemoJSX extends Component {
  // Trong jeact sử dụng cú pháp của JSX là cú pháp kết hợp giữa JS + XML
  render() {
    const greeting = "Hello word";
    const student = {
      name: "Vân Anh",
      age: "20",
    };
    // Lưu ý khi dùng css trong React
    // + Khi sử dụng css inline các thuộc tính sẽ được viết theo kiểu canelCase
    // Ví dụ bacground-color => backgroundColor
    // + Khi sử dụng css ở external thì class đổi thành className
    // + Khi sử dụng các  sự kiện cũng viết dưới dạng Camlcase

    function f() {
      alert("Rikkei");
    }
    return (
      <div>
        {/*Phép nội suy trong JSX */}
        <h2 style={{ backgroundColor: "pink" }}>{greeting}</h2>

        <p class="infor-student">
          Student name: {student.name} - student age: {student.age}
        </p>
        <button onClick={f}>Click Me !!</button>
      </div>
    );
  }
}

export default DemoJSX;
