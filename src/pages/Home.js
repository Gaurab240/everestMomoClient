import React from "react";
import BlueCard from "../components/homePageComp/blueLocationCard/BlueCard";

import FormComp from "../components/FormComp/FormComp";
import Card from "../components/homePageComp/popularRecipie/card/Card";
import QCard from "../components/homePageComp/qualityFood/QCard";
import WeOffer from "../components/homePageComp/weOfferPeople/WeOffer";

import "./Home.css";

import TheOne from "../components/homePageComp/theOneMomo/TheOne";
import CustomerLove from "../components/homePageComp/whyCustomerLove/CustomerLove";
import Map from "../components/Map";

export const Home = () => {
  return (
    <div>
      <TheOne />
      <CustomerLove />
      <Card />
      <WeOffer />
      <QCard />
      <div>
        <div className="getInTouch">
          <h1>
            Get <span style={{ color: "#D95103" }}>In Touch</span>
          </h1>
          <p style={{ color: "#0C6967", fontSize: "25px", fontWeight: "bold" }}>
            Our friendly team would love to hear from you
          </p>
        </div>
        <div
          className="addAndForm"
          style={{ display: "flex", textAlign: "left" }}
        >
          <div style={{ flex: "0.4" }}>
            <BlueCard />
          </div>
          <div style={{ flex: "0.6", margin: "40px 24px" }}>
            <FormComp />
          </div>
        </div>
      </div>
      <div className="homeMap">
        <Map />
      </div>
      <div className="homeFooter"></div>
    </div>
  );
};
