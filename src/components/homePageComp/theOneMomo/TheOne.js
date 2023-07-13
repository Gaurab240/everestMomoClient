import React from "react";
import "./TheOne.css";
import logo1 from "./Ellipse9.png";
import logo2 from "./Frame16.png";
import { Link } from "react-router-dom";

const TheOne = ({ className }) => {
  return (
    <div className="theOne">
      <div className="theOneAndImage">
        <div className="theOneText">
          <p style={{fontSize:'16px'}}>RESTAURANT</p>
          <h2>
            The #One
            <br />
            Momo <span style={{ color: "#D95103" }}>Restaurant</span>
          </h2>
          <p  style={{fontSize:'20px'}}>
            More than <span style={{ color: "#D95103" }}>20+ Varieties</span> of momo available for you
          </p>
          <Link to="/menu">
          <button
            className="qCardBut qCardBut--primary"
            alt="Explore Food Menu"
          >
            <p>Explore Food Menu &rarr;</p>
          </button>
          </Link>
          
        </div>
        <div className="theOneImage">
          <img src={logo1} alt="Logo1" className="logo1" />
          <div className="logoContainer">
            <img
              src={logo2}
              alt="Logo2"
              className="logo2"
              position="absolute"
              left="60%"
              
              transform="translate(-50%, 0)"
              width="80%"
              height="80%"
              z-index="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOne;
