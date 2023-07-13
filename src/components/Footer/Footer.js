import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

import { FaTiktok } from "react-icons/fa";

import logo from "./momos.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="firstColumn">
          <div>
            <img
              style={{ height: "40px", width: "100px" }}
              src={logo}
              alt="image"
            />
          </div>
          <div className="fotdesc">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="secondColumn">
          <ul>
            <h3>Momos</h3>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              <li>About Us</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }} to="/menu">
              <li>Our Menu</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/service"
            >
              <li>Our Services</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="thirdColumn">
          <ul>
            <h3>Legals</h3>
            <li>Terms Condition</li>
            <li>Privacy Policy</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="fourthColumn">
          <ul>
            <h3>Follow Us</h3>
            <div className="iconFIrstRow">
              <li>
                <div className="socialIcon">
                  <Link
                    style={{ color: "white" }}
                    to="https://www.facebook.com"
                  >
                    <BsFacebook />
                  </Link>
                </div>
              </li>
              <li>
                <div className="socialIcon">
                  <Link
                    style={{ color: "white" }}
                    to="https://www.linkedin.com"
                  >
                    <TiSocialLinkedinCircular />
                  </Link>
                </div>
              </li>
              <li>
                <div className="socialIcon">
                  {" "}
                  <Link style={{ color: "white" }} to="https://www.twitter.com">
                    <AiFillTwitterCircle />
                  </Link>
                </div>
              </li>
            </div>
            <div className="iconSecondRow">
              <li>
                {" "}
                <div className="socialIcon">
                  {" "}
                  <Link style={{ color: "white" }} to="https://www.youtube.com">
                    {" "}
                    <AiFillYoutube />
                  </Link>
                </div>
              </li>
              <li>
                <div className="socialIcon">
                  {" "}
                  <Link
                    style={{ color: "white" }}
                    to="https://www.instagram.com"
                  >
                    {" "}
                    <AiFillInstagram />
                  </Link>
                </div>
              </li>
              <li>
                <div className="socialIcon">
                  <Link style={{ color: "white" }} to="https://www.tiktok.com">
                    <FaTiktok />
                  </Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="copyright">
        Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
