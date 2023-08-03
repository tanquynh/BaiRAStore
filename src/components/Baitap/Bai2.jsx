import React, { Component } from "react";

class Bai2 extends Component {
  render() {
    let a = +prompt("Nhập số thứ nhất");
    let b = +prompt("Nhập số thứ hai");
    let sum = a + b;
    return (
      <div>
        <p>
          Tổng của {a} và {b} là : {sum}
        </p>
      </div>
    );
  }
}

export default Bai2;
