import React, { useEffect, useState } from "react";
import "./Card.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//import items from "./array.js";
import axios from "axios";

const Card = () => {
  const [categoryItem, setCategoryItem] = useState("Buff");

  const handleClick = (categoryItem) => {
    setCategoryItem(categoryItem);
  };

  const [momo, setMomo] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/product/getProducts"
      );
      console.log(res);
      setMomo(res.data);
    } catch (error) {
      console.error(error);
      setMomo([]);
      // console.log(error.response.data);
      // console.log(error.response.status);
    }
  };

  return (
    <div>
      <div className="popularRecipie">
        <h2>
          Our <span style={{ color: "#D95103" }}>Most Popular</span> Recipies
        </h2>
        <p>
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>
        <div className="tabs">
          <div>
            <button onClick={() => setCategoryItem("Buff")} className="buff">
              Buff
            </button>
          </div>

          <div>
            <button onClick={() => setCategoryItem("Veg")} className="buff">
              Veg
            </button>
          </div>

          <div>
            <button onClick={() => setCategoryItem("Chicken")} className="buff">
              Chicken
            </button>
          </div>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-wrapper">
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              centerMode={true}
              centerSlidePercentage={33.33}
              emulateTouch={true}
            >
              {momo.map((product) => (
                <div
                  key={product._id}
                  style={{
                  
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                  <img src={product.image.url} alt={product.itemName} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
