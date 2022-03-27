import React from "react";
import "./Container.css";

const Container = () => {
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
          <h3>this is container</h3>
        </div>
      </div>
    </div>
  );
};

export default Container;
