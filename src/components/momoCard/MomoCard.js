import React, { useEffect, useState } from "react";
import "./MomoCard.css";

import axios from "axios";

const MomoCard = () => {
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
    <div className="momoCard">
      {momo.map((item, index) => {
        const isOdd = index % 2 === 1;
        return (
          <div className={isOdd ? "momoRow" : null} key={item._id}>
            <div className="momoItem">
              <img
                src={item.image.url}
                height="180px"
                width="250px"
                className="momoImage"
                alt="firstMomo"
              />

              <p className="firstPara" style={{ backgroundColor: "#D95103" }}>
                {item.category}
              </p>
              <h2>{item.categoryItem}</h2>
              <h4>
                Rs <span>{item.price}</span>
              </h4>
              <p className="secondPara">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MomoCard;

//trial
/*
import React, { useEffect, useState } from "react";
import "./MomoCard.css";

import axios from "axios";

const MomoCard = () => {
  const [momo, setMomo] = useState([]);
  const [categoryItem, setCategoryItem] = useState("");

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

  const handleChange = (e) => {
    setCategoryItem(e.target.value);
  };

  return (
    <div className="momoCard">
      <select
        className="categorySelect"
        onChange={handleChange}
        value={categoryItem}
      >
        <option value="">Select Category</option>
        <option value="Buff Momo">Buff Momo</option>
        <option value="Veg Momo">Veg Momo</option>
        <option value="Chicken Momo">Chicken Momo</option>
        <option value="Pork Momo">Pork Momo</option>
      </select>
      {momo.filter((item) => item.categoryItem === categoryItem).map((item, index) => {
        const isOdd = index % 2 === 1;
        return (
          <div className={isOdd ? "momoRow" : null} key={item._id}>
            <div className="momoItem">
              <img
                src={item.image.url}
                height="180px"
                width="250px"
                className="momoImage"
                alt="firstMomo"
              />

              <p className="firstPara" style={{ backgroundColor: "#D95103" }}>
                {item.category}
              </p>
              <h2>{item.categoryItem}</h2>
              <h4>
                Rs <span>{item.price}</span>
              </h4>
              <p className="secondPara">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MomoCard;

*/ 