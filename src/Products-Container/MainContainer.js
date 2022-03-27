import React, { useEffect, useState } from "react";
import "./MainContainer.css";

const MainContainer = () => {
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setProdcuts(data));
  }, []);
  return (
    <div className="main-container">
      <h1 className="top-title">
        mega<span>Shop</span> eCommerce
      </h1>
      <div className="shop-container">
        <div className="cart-container">
          <h3>Cart calculation</h3>
        </div>
        <div className="product-container">
          <h3>Available Products: {products.length}</h3>
          <div>{products.map((product) => console.log(product))}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
