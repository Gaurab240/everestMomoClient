import React, { useEffect, useState } from "react";
import "./MomoCard.css";

import axios from "axios";

const MomoCard = () => {
  const [momo, setMomo] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);

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
      const uniqueCategories = [
        ...new Set(res.data.map((item) => item.categoryItem)),
      ];
      setCategoryItems(uniqueCategories);
    } catch (error) {
      console.error(error);
      setMomo([]);
      setCategoryItems([]);
    }
  };

  const renderItemsByCategory = (category) => {
    const filteredItems = momo.filter((item) => item.categoryItem === category);
    const rows = Math.ceil(filteredItems.length / 2);
    const items = [];

    for (let i = 0; i < rows; i++) {
      const startIndex = i * 2;
      const rowItems = filteredItems.slice(startIndex, startIndex + 2);

      const row = (
        <div className="momoRow" key={i}>
          {rowItems.map((item, index) => (
            <div className="momoItem" key={index}>
              <img
                src={item.image.url}
                className="momoImage"
                alt="firstMomo"
              />
              <div className="momoContent">
                
                <p className={getCategoryClass(item.category)}>{item.category}</p>
                <h2>{item.itemName}</h2>
                <h4>Rs {item.price}</h4>
                <p className="secondPara">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      );

      items.push(row);
    }

    return items;
  };
  const getCategoryClass = (category) => {
    switch (category) {
      case "New":
        return "firstPara newCategory";
      case "Popular":
        return "firstPara popularCategory";
      case "Recommended":
        return "firstPara recommendedCategory";
      default:
        return "firstPara";
    }
  };

  return (
    <div className="momoCard">
      {categoryItems.map((category) => (
        <div className="categoryContainer" key={category}>
          <h3 className="categoryHeader">{category}</h3>
          <div className="momoItemsContainer">
            {renderItemsByCategory(category)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MomoCard;
