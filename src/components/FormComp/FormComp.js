
import axios from "axios";
import React, { useState } from "react";
import "./FormComp.css";
import { MdArrowDropDown } from "react-icons/md";

const FormComp = () => {
  const [details, setDetails] = useState({
    FirstName: "",
    LastName: "",
    WhatCanWeDoForYou: "",
    Email: "",
    PhoneNo: "",
    Message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropDownicon, setdropDownIcon] = useState(true);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setdropDownIcon(!dropDownicon);
  };

  const handleDropdownSelect = (value) => {
    setDetails({ ...details, WhatCanWeDoForYou: value });
    setDropdownOpen(false);
    setdropDownIcon(true);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      FirstName: details.FirstName,
      LastName: details.LastName,
      WhatCanWeDoForYou: details.WhatCanWeDoForYou,
      Email: details.Email,
      PhoneNo: details.PhoneNo,
      Message: details.Message,
    };

    try {
      await axios
        .post("http://localhost:5000/api/sendmessage/sendInfo", data)
        .then((res) => {
          if (res.data) {
            console.log("Message sent successfully");
            alert("Data Inserted");
            // console.log(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      console.log("Error in sending message!!!");
    }
  };

  return (
    <div className="formComp">
      <form onSubmit={handleSubmit}>
        <div className="labelAndInput">
          <div>
            <label>
              FirstName:
              <br />
              <input
                type="text"
                placeholder=""
                required
                name="FirstName"
                value={details.FirstName}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label style={{ lineHeight: "120%" }}>
              LastName:
              <br />
              <input
                type="text"
                placeholder=""
                required
                name="LastName"
                onChange={handleChange}
                value={details.LastName}
              />
            </label>
          </div>
        </div>

        <div className="whatWECanBelow">
          <div className="dropdownInputContainer">
            <label>
              What can we do for you:
              <br />
              <div className="dropdownInputWrapper">
                
                <div  onClick={handleDropdownToggle} className={dropDownicon?"mDDropdown":"mDDropdownHide"} >
                  <MdArrowDropDown 
                    style={{ position: "absolute", top: "30%", left: "89%" }}
                  />
                </div>

                <input
                  type="text"
                  placeholder=""
                  value={details.WhatCanWeDoForYou}
                  required
                  onChange={handleChange}
                  name="WhatCanWeDoForYou"
                  className="dropdownInput"
                  readOnly
                  onClick={handleDropdownToggle}
                />
                {dropdownOpen && (
                  <div className="dropdownOptions">
                    <div
                      className="dropdownOption"
                      onClick={() => handleDropdownSelect("Option1")}
                    >
                      Option 1
                    </div>
                    <div
                      className="dropdownOption"
                      onClick={() => handleDropdownSelect("Option2")}
                    >
                      Option 2
                    </div>
                    <div
                      className="dropdownOption"
                      onClick={() => handleDropdownSelect("Option3")}
                    >
                      Option 3
                    </div>
                    <div
                      className="dropdownOption"
                      onClick={() => handleDropdownSelect("Option4")}
                    >
                      Option 4
                    </div>
                  </div>
                )}
              </div>
            </label>
          </div>

          <div>
            <label>
              Email:
              <br />
              <input
                type="email"
                placeholder=""
                value={details.Email}
                required
                onChange={handleChange}
                name="Email"
              />
            </label>
          </div>

          <div>
            <label>
              Phone Number:
              <br />
              <input
                type="number"
                placeholder=""
                value={details.PhoneNo}
                required
                onChange={handleChange}
                name="PhoneNo"
              />
            </label>
          </div>

          <div className="msg">
            <label>
              Message:
              <br />
              <input
                type="text"
                placeholder=""
                value={details.Message}
                required
                onChange={handleChange}
                name="Message"
              />
            </label>
          </div>
        </div>

        <button className="sendMsg">Send Message</button>
      </form>
    </div>
  );
};

export default FormComp;
