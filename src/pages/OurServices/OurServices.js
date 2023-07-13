import React from "react";
import "./OurServices.css";
import logo1 from "./man2.png";
import logo2 from "./party.png";
import logo3 from "./Image2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QrCode from "../../components/qrcode/QrCode";
import { Link } from "react-router-dom";

const OurServices = () => {
  const carouselSettings = {
    showArrows: true,
    showIndicators: true,

    showStatus: false,
    infiniteLoop: true,
    stopOnHover: true,
    useKeyboardArrows: true,
    autoPlay: 3000,
    transitionTime: 500,
    interval: 5000,
    showThumbs: false,
  };

  const imageStyles = {
    borderRadius: "40px", // Adjust the border radius as needed
  };

  return (
    <div className="ourServices">
      <div className="aboutUsAndImage">
        <div className="wePrideOurselfOn">
          <p
            style={{ color: "#0C6967", fontFamily: "Allura", fontSize: "64px" }}
          >
            Our Services
          </p>
          <p style={{ color: "#6B788E", fontSize: "20px" }}>
            KNOWING OUR CUSTOMERS NEEDS
          </p>
          <h2 style={{ fontSize: "39px" }}>
            <span style={{ color: "#D95103" }}>
              We're more than just momos.
            </span>
            <br />
            We're a full-service dining experience.
          </h2>
        </div>
        <div className="whiteGirl">
          <img src={logo1} alt="pic" height="600px" width="80%" />
        </div>
      </div>

      <div className="imageAndDineWithUs">
        <div className="dineWith">
          <h2 style={{ color: "white" }}>Dine With Us</h2>
          <p style={{ color: "white" }}>
            Enjoy our momos in the comfort of your own home with our delivery
            services
          </p>
          <button>Watch the Video</button>
        </div>
      </div>

      <div className="divContainerforPrivatePartyAndCarousel">
        <div className="privatePartyAndCarousel">
          <div className="privateParty">
            <div className="">
              <img src={logo2} height="70px" alt="logo2" width="70px" />
              <h2>Private Party</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
                adipiscing. Leo odio tincidunt ipsum magna lacus viverra
                tincidunt.s
              </p>
            </div>
          </div>
          <div className="scanTheQrAndQr">
            <div className="scanTheQrText">
              <h2 style={{ color: "#0C6967" }}>Scan the QR code</h2>
              <p>You can also check about the service</p>
            </div>

            <div className="scanQrOnly">
              <QrCode />
            </div>
          </div>
        </div>

        <div className="privatepartyCarousel">
          <Carousel {...carouselSettings}>
            <div>
              <img src={logo3} alt="carousel1" style={imageStyles} />
            </div>
            <div>
              <img src={logo3} alt="carousel2" style={imageStyles} />
            </div>
            <div>
              <img src={logo3} alt="carousel3" style={imageStyles} />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="divContainerforPrivatePartyAndCarousel second">
        <div className="privatepartyCarousel">
          <Carousel {...carouselSettings}>
            <div>
              <img src={logo3} alt="carousel1" style={imageStyles} />
            </div>
            <div>
              <img src={logo3} alt="carousel2" style={imageStyles} />
            </div>
            <div>
              <img src={logo3} alt="carousel3" style={imageStyles} />
            </div>
          </Carousel>
        </div>

        <div className="privatePartyAndCarousel">
          <div className="privateParty">
            <div className="">
              <img src={logo2} alt="logo2" height="70px" width="70px" />
              <h2>Categring</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
                adipiscing. Leo odio tincidunt ipsum magna lacus viverra
                tincidunt.s
              </p>
            </div>
          </div>
          <div className="scanTheQrAndQr">
            <div className="scanTheQrText">
              <h2 style={{ color: "#0C6967" }}>Scan the QR code</h2>
              <p>You can also check about the service</p>
            </div>

            <div className="scanQrOnly">
              <QrCode />
            </div>
          </div>
        </div>
      </div>

      <div className="gotAnyQueries">
        <h2>Got any Queries?</h2>
        <p>
          If you have any queries, send us a message. Our Friendly team would
          love to hear from you{" "}
        </p>

        <Link style={{color:'white'}} to="/contact">
        <button className="qCardBut">
          <p>Get In Touch</p>
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default OurServices;
