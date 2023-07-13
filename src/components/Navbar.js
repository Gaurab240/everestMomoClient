import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./momos.png";
import "./Navbar.css";
import {  AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import {BsFacebook} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="navbar1">
      <div className="nav1">
        <div>
          <NavLink className="" to="/">
            <img
              src={Logo}
              alt="logo"
              style={{ height: "50px", width: "150px" }}
            />
          </NavLink>
        </div>
        <div className="menuLi">
          <div>
            <NavLink className="activeLink" to="/about">
              About Us
            </NavLink>
          </div>

          <div>
            <NavLink className="activeLink" to="/menu">
              Our Menu
            </NavLink>
          </div>

          <div>
            <NavLink className="activeLink" to="/service">
              Our Services
            </NavLink>
          </div>

          <div>
            <NavLink className="activeLink" to="/allergyadvice">
              Allergy Advice
            </NavLink>
          </div>
        </div>
        <div className="sociaMediaIcon">
          <div>
            <NavLink className="icon" to="https://www.facebook.com">
              
              <BsFacebook />
            </NavLink>
          </div>
          <div>
            <NavLink className="icon" to="https://www.tiktok.com">
              <FaTiktok />
            </NavLink>
          </div>
          <div>
            <NavLink className="icon" to="https://www.instagram.com">
              <AiFillInstagram />
            </NavLink>
          </div>
          <div>
         
         <NavLink to="/contact">
         <button className="but">Contact Us</button>
         </NavLink>
           
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
