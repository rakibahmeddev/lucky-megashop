import React from "react";
import "./Products.css";

const Products = (props) => {
  const { name, picture, price } = props.product;
  return (
    <div className="products">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Products;
