import React from "react";

import "./Contact.css";


import FormComp from "../../components/FormComp/FormComp.js";

import Map from "../../components/Map";
import Cardjs from "../../components/ContactDetails/Card";


//const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
  return (
    <div className="contact">
      
      <div className="content">
        <div className="textContact">Our Contact</div>
        <br />
        <div className="getInTouch">Get In Touch</div>
        <div className="ourFriendlyTeam">
          <span style={{ color: "#D95103" }}>Our Friendly Team </span>would love
          to heat from you
        </div>
        <div style={{ marginBottom: "35px" }}>
          <Cardjs />
        </div>
        {/* Card */}

        <div className="locAndContForm" style={{ height: "750px" }}>
          <div className="map" style={{ height: "750px", width: "50%" }}>
            <Map />
            {/* Map here */}
          </div>
          <div
            className="contForm"
            style={{
              height: "500px",
              marginTop: "10px",
              width: "50%",
              padding: "25px",
              background: "#FAFBFB",
            }}
          >
            <h2
              style={{
                fontFamily: "Proxima Nova",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "31px",
              }}
            >
              Contact{" "}
              <span
                style={{
                  color: "#D95103",
                }}
              >
                Us
              </span>
            </h2>
            <p>
              If you have any queries, send us a message. our friendly team
              would love to hear from you.
            </p>

            <FormComp />
          </div>
        </div>
        <div className="foot">
       
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
