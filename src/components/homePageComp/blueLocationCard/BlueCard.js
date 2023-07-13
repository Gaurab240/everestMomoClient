import React from "react";
import "./BlueCard.css";
import { MdAccessTime, MdLocationPin, MdPhone } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlueCard = () => {
  return (
    <div className="bluecard">
      <div className="blue">
        <div className="divCard">
          <div className="mdLocOurAdd">
            <p style={{ alignItems: "center", fontWeight: "bold" }}>
              {" "}
              <MdLocationPin /> Our Address
            </p>
          </div>
          <p style={{ fontStyle: "italic" }}>
            New Baneshwor, Kathmandu, Bagmati, Nepal
          </p>
        </div>

        <div className="divCard">
          <div className="mdLocOurAdd">
            <p style={{ alignItems: "center", fontWeight: "bold" }}>
              {" "}
              <MdPhone /> Our Contacts{" "}
            </p>
          </div>
          <div className="mobileAndLand">
            <div>
              <p style={{ fontWeight: "bold", fontStyle: "none !important" }}>
                Mobile
              </p>
              <p style={{ fontStyle: "italic" }}>9843543455</p>
              <p style={{ fontStyle: "italic" }}>9874569002</p>
            </div>
            <div>
              {" "}
              <p style={{ fontWeight: "bold", fontStyle: "none" }}>Landline</p>
              <p style={{ fontStyle: "italic" }}>01-4567023</p>
            </div>
          </div>
        </div>

        <div className="divCard">
          <div className="mdLocOurAdd">
            <p style={{ alignItems: "center", fontWeight: "bold" }}>
              <MdAccessTime /> Our Service Time
            </p>
          </div>
          <div className="monFriSunSat">
            <div>
              <p style={{ fontWeight: "bold", fontStyle: "none !important" }}>
                MON-FRI
              </p>
              <p style={{ fontStyle: "italic" }}>10 am-8 pm</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontStyle: "none !important" }}>
                SAT-SUN
              </p>
              <p style={{ fontStyle: "italic" }}>Closed</p>
            </div>
          </div>
        </div>

        <div className="getInTouch">
          <p style={{ fontStyle: "italic" }}>Get in touch in social networks</p>
          <div className="getSocialIcon">
            <Link style={{color:'white'}} to="https://www.facebook.com">
              <div>
                <BsFacebook />
              </div>
            </Link>

            <Link style={{color:'white'}} to="https://www.instagram.com">
              <div>
                <AiFillInstagram />
              </div>
            </Link>

            <Link style={{color:'white'}} to="https://www.tiktok.com">
              <div>
                <FaTiktok />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueCard;
