import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import SliderPage from "./SliderPage";
import Detail from "./Detail";
import FindSection from "./FindSection";
import Client from "./Client";
import Sign from "./Sign";
import Info from "./Info";
import Footer from "./Footer";
import ItemProduct from "./ItemProduct";

class Bai3 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, src: "images/p1.png", price: "$120.00" },
        { id: 2, src: "images/p2.png", price: "$110.00" },
        { id: 3, src: "images/p3.png", price: "$150.00" },
        { id: 4, src: "images/p4.png", price: "$150.00" },
        { id: 5, src: "images/p5.png", price: "$150.00" },
        { id: 6, src: "images/p6.png", price: "$150.00" },
        { id: 7, src: "images/p7.png", price: "$150.00" },
        { id: 8, src: "images/p8.png", price: "$150.00" },
        { id: 9, src: "images/p9.png", price: "$150.00" },
        { id: 10, src: "images/p10.png", price: "$150.00" },
        { id: 11, src: "images/p11.png", price: "$150.00" },
        { id: 12, src: "images/p12.png", price: "$150.00" },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="hero_area">
          {/* header section strats */}
          <HeaderPage />
          {/* end header section */}
          {/* slider section */}
          <SliderPage />
          {/* end slider section */}
        </div>
        {/* detail section */}
        <Detail />
        {/* end detail section */}
        {/* products section */}
        <section className="products_section">
          <div className="heading_container">
            <h2>New Products In Store</h2>
            <p>Featured Product Just Arrived</p>
          </div>
          <div className="container layout_padding">
            <div className="product_container">
              {/* Cách 1 */}
              {/* <ItemProduct src={"images/p1.png"} price={"$120.00"} />
              <ItemProduct src={"images/p2.png"} price={"$110.00"} />
              <ItemProduct src={"images/p3.png"} price={"$120.00"} />
              <ItemProduct src={"images/p4.png"} price={"$150.00"} />
              <ItemProduct src={"images/p5.png"} price={"$150.00"} />
              <ItemProduct src={"images/p6.png"} price={"$150.00"} />
              <ItemProduct src={"images/p7.png"} price={"$150.00"} />
              <ItemProduct src={"images/p8.png"} price={"$150.00"} />
              <ItemProduct src={"images/p9.png"} price={"$150.00"} />
              <ItemProduct src={"images/p10.png"} price={"$150.00"} />
              <ItemProduct src={"images/p11.png"} price={"$150.00"} />
              <ItemProduct src={"images/p12.png"} price={"$150.00"} /> */}

              {/* Cách 2 */}
              {this.state.data.map((e, i) => (
                <ItemProduct key={i} src={e.src} price={e.price} />
              ))}
            </div>
          </div>
        </section>
        {/* end products section */}
        {/* find section */}
        <FindSection />
        {/* end find section */}
        {/* client section */}
        <Client />
        {/* end client section */}
        {/* sign section */}
        <Sign />
        {/* end sign section */}
        {/* info section */}
        <Info />
        {/* end info section */}
        {/* footer section */}
        <Footer />
        {/* footer section */}
      </div>
    );
  }
}

export default Bai3;
