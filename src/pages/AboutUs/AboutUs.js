import React from "react";
import "./AboutUs.css";
import logo from "./Group1.png";
import logo1 from "./Rectangle.png";
import logo3 from "./pngwing.png";
import logo4 from './pngegg.png';
import logo5 from './Rectangle1.png'
import logo6 from './thirdmomo.png';
import logo7 from './Rectangle3.png'
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2.js";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      
      <div className="aboutUsAndImage">
        <div className="wePrideOurselfOn">
          <p
            style={{ color: "#0C6967", fontFamily: "Allura", fontSize: "64px" }}
          >
            About Us
          </p>
          <p style={{ color: "#6B788E", fontSize: "20px" }}>
            WE PRIDE OURSELF ON
          </p>
          <h2 style={{ fontSize: "39px" }}>
            <span style={{ color: "#D95103" }}>
              Our authentic momo recipies
            </span>
            <br /> passed down through generations
          </h2>
        </div>
        <div className="whiteGirl">
          <img src={logo} alt="pic" height="600px" width="80%" />
        </div>
      </div>
      <div className="imageAndProcessBehind">
        <div className="processBehind">
          <h2 style={{ color: "white" }}>Process behind the making</h2>
          <p style={{ color: "white" }}>
            See how we make momos that you like from only the best ingredients
          </p>
          <button>Watch the Video</button>
        </div>
      </div>
      <div className="momosAreMadeWithLove">
        <div className="momosAreMadeWithLoveInner">
          <div className="ourMomoText">
            <h1>
              Our momos are{" "}
              <span style={{ color: "#D95103" }}>
                made
                <br /> with love
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur.Lectus faucibus lorem ac
              adipiscing.Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.Viverra aliquet sollicitudin eget dapibus.Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="ourMomosAreImage">
            <img src={logo1} alt="logo1" height="300px" width="80%" />
          </div>
        </div>
        <img
          src={logo3}
          alt="pngwing"
          height="175px"
          width="250px"
          style={{ marginTop: "-110px" }}
        />
      </div>
      <div className="momosAreMadeWithLove">
        <div className="momosAreMadeWithLoveInner">
          <div className="ourMomosAreImage">
            <img src={logo5} alt="logo1" height="300px" width="80%" />
          </div>
          <div className="ourMomoText">
            <h1>
            Taste the difference with {" "}
              <span style={{ color: "#D95103" }}>
                
                <br />our handcrafted momos
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur.Lectus faucibus lorem ac
              adipiscing.Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.Viverra aliquet sollicitudin eget dapibus.Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
        </div>
        <img
          src={logo4}
          alt="pngwing"
          height="175px"
          width="250px"
          style={{ marginTop: "-110px" }}
        />
      </div>

      <div className="momosAreMadeWithLove">
        <div className="momosAreMadeWithLoveInner">
          <div className="ourMomoText">
            <h1>
            Our momos are the <br/>perfect<span style={{ color: "#D95103" }}> blend of tradition</span><br/>and <span style={{ color: "#D95103" }}>innovation
                
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur.Lectus faucibus lorem ac
              adipiscing.Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.Viverra aliquet sollicitudin eget dapibus.Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="ourMomosAreImage">
            <img src={logo7} alt="logo1" height="300px" width="80%" />
          </div>
        </div>
        <img
          src={logo6}
          alt="pngwing"
          height="175px"
          width="250px"
          style={{ marginTop: "-110px" }}
        />
      </div>
    <Carousel/>

    <div className="meetTheTeam">
    <h1>
           Meet The {" "}
              <span style={{ color: "#D95103" }}>
                
              Team
              </span>
            </h1>
            <p>Our talented team members who delivers only the best results</p>
  <Carousel2/>
    </div>
    </div>
  );
};

export default AboutUs;
