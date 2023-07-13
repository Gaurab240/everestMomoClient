import React from "react";
import "./Card.css";
import logo1 from "./Chef.png";
import logo2 from "./Quality.png";
import logo3 from "./party.png";
import { Link } from "react-router-dom";

const QCard = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="qCardRow">
        <div className="firstQCard">
          <img src={logo1} height="70px" width="70px" />
          <h2>Quality Food</h2>
          <p>
            Only the best food with top quality
            <br /> products and ingredients
          </p>
        </div>

        <div className="firstQCard">
          <img src={logo2} height="70px" width="70px" />
          <h2>Private Party</h2>
          <p>
            Get the best food for all your private
            <br />
            parties and gatherings
          </p>
        </div>

        <div className="firstQCard">
          <img src={logo3} height="70px" width="70px" />
          <h2>Categring</h2>
          <p>
            Get the best food for any occasions
            <br />
            and gatherings
          </p>
        </div>
      </div>

      <Link to="/service">
        <button className="qCardBut">
          <p>Explore Our Services &rarr;</p>
        </button>
      </Link>
    </div>
  );
};

export default QCard;
