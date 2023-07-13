import React from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";

import MomoCard from "../../components/momoCard/MomoCard";

import QrCode from "../../components/qrcode/QrCode";

import "./Menu.css";

const OurMenu = () => {
  return (
    <div className="menu">
      <div className="menuContent">
        <div className="textMenu">Our Menu</div>
        <br />
        <div className="ourMenuIsMore">
          <span style={{ color: "#D95103" }}>
            Our menu is more than just momos,
          </span>
          <br />
          with a variety of dishes to cater to all tastes and preferences.
        </div>
        <br />
        <div className="scanMe">
          <h3>Scan the QR code</h3>
          <p>You can also check the allergy advices using your phone as well</p>
          <br />{" "}
          <div
            className="qrScanner"
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            <div
              className="qrCode"
              style={{
                height: "175px",
                width: "175px",
                margin: "0 auto",
              }}
            >
              <QrCode />
            </div>
            <h1
              style={{
                fontWeight: "700",
                fontSize: "31px",
                lineHeight: "120%",
              }}
            >
              <span style={{ color: "#D95103" }}>SCAN </span>ME!
              <MdOutlinePhoneAndroid />
            </h1>
          </div>
        </div>
        <br />
        <br />
        <div class="buffMomo-container">
          <h1
            class="buffMomo"
            style={{ fontSize: "40px", lineHeight: "120%", fontWeight: "bold" }}
          >
            <span style={{ color: "#D95103" }}>BUFF</span> MOMO's
          </h1>
        </div>
        <MomoCard />
      </div>
    </div>
  );
};

export default OurMenu;
