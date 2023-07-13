import React, { useState } from "react";
import "./FormComp.css";

const FormComp = () => {
  const [details, setDetails] = useState({
    FirstName: "",
    LastName: "",
    WhatCanWeDoForYou: "",
    Email: "",
    PhoneNo: "",
    Message: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
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
                onChange={(e) => handleChange(e)}
                
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
                onChange={(e) => handleChange(e)}
                value={details.LastName}
              />
            </label>
          </div>
        </div>
        <div className="whatWECanBelow">
          <div>
            <label>
              What can we do for you:
              <br />
              <input
                type="text"
                placeholder=""
                value={details.WhatCanWeDoForYou}
                required
                onChange={(e) => handleChange(e)}
                name="WhatCanWeDoForYou"
              />
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
