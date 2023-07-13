import React from "react";
import "./CustomerLove.css";
import logo1 from "./pngwing1.png";

const CustomerLove = () => {
  return (
    <div className="customerLove">
      <div className="custImage">
        <div className="custimageBackground">
          <img src={logo1} alt="custImage" height="500px" />
        </div>
      </div>
      <div className="custTextAndButton">
        <h2 style={{fontWeight:'bold'}}>
          Why Customers <span style={{color:'#D95103'}}>Love Us</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
          fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
          dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
          cursus turpis.
        </p>
        <button className="qCardBut">
          <p>Explore our story &rarr;</p>
        </button>
      </div>
    </div>
  );
};

export default CustomerLove;
