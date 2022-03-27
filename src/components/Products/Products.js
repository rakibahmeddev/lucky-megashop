import React from "react";
import "./Products.css";

const Products = (props) => {
  const { name, picture, price } = props.product;
  return (
    <div className="products">
      <div className="products-info">
        <img src={picture} alt="" />
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <div className="addToCart-parent">
          <button className="add-to-cart-btn">
            ADD TO CART{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
