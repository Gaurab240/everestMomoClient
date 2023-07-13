import React from 'react';
import './Card.css';
import { MdAccessTime, MdLocationPin, MdPhone } from "react-icons/md";

const Cardjs = () => {
  return (
    <div>
        <div className="card3">
          <div className="firstCard">
            <div className="location">
              <div style={{ color: "#D95103",marginTop:'-5px' }}>
                <MdLocationPin />
              </div>
              <div className="locatn">
                <h4>LOCATION</h4>
              </div>
            </div>
            <div>
              <h3>New Baneshwor -41201, Kathmandu, Bagmati, Nepal</h3>
            </div>
          </div>
          <div className="secondCard">
            <div className="phone">
              <div>
                <MdPhone style={{ color: "#D95103",marginTop:'-9px' }} />
              </div>
              <div>
                <h4>PHONE</h4>
              </div>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "15px" }}>
                  <h3
                    style={{
                      color: "#0C6967",
                      fontWeight: "none",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                    Mobile:
                  </h3>
                </div>
                <div style={{marginLeft:'45px'}}>
                  <h3 >
                    (+977) 980 5689789
                    <br /> (+977) 9841 275897
                  </h3>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  {" "}
                  <h3
                    style={{
                      color: "#0C6967",
                      fontWeight: "none",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                    Tel:
                  </h3>
                </div>
                <div>
                  <h3>01-4783972</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="thirdCard">
            <div className="serviceT">
              <div style={{ color: "#D95103",marginTop:'-5px' }}>
                <MdAccessTime />
              </div>
              <div>
                <h4>SERVICE TIME</h4>
              </div>
            </div>

            <div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "15px" }}>
                  <h3
                    style={{
                      color: "#0C6967",
                      fontWeight: "none",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                    MON-FRI:
                  </h3>
                </div>
                <div style={{ marginLeft: "80px" }}>
                  <h3>8 am-8 pm</h3>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  {" "}
                  <h3
                    style={{
                      color: "#0C6967",
                      fontWeight: "none",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                    SAT-SUN
                  </h3>
                </div>
                <div>
                  <h3>Closed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Cardjs