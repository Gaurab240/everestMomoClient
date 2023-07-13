import React from "react";
import IngredientsUsed from "../../components/Allergy/IngredientsUsed";
import "./AllergyAdv.css";
import logo1 from './Group1.png'; 

const AllergyAdv = () => {
  return (
    <div className="allergyAdvice">
      <div className="aboutUsAndImage">
        <div className="wePrideOurselfOn">
          <p
            style={{ color: "#0C6967", fontFamily: "Allura", fontSize: "64px" }}
          >
            Allergy Advice
          </p>
          <p style={{ color: "#6B788E", fontSize: "20px" }}>
            AT OUR RESTAURANT
          </p>
          <h2 style={{ fontSize: "31px" }}>
            We use only the freshest and highest quality ingredients in all our
            dishes, <br />
            <span style={{ color: "#D95103" }}>
              and offer transparency in our ingredient labeling.
            </span>
          </h2>
        </div>
        <div className="whiteGirl">
          <img src={logo1} alt="pic" height="600px" width="80%" />
        </div>
      </div>
      <IngredientsUsed/>
    </div>
  );
};

export default AllergyAdv;
