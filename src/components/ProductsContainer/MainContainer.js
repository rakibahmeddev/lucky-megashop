import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
// import Products from "../Products/Products";
import "./MainContainer.css";

const MainContainer = () => {
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setProdcuts(data));
  }, []);

  const [cart, setCart] = useState([]);
  const handleAddToCart = (products) => {
    console.log(products);
    const newCart = [...cart, products];
    setCart(newCart);
  };
  return (
    <div className="main-container">
      <div className="title-bg">
        <h1 className="top-title">
          mega<span>Shop</span> eCommerce
        </h1>
      </div>
      <div className="shop-container">
        <div className="cart-container">
          <h3>Cart calculation</h3>
          <p>Selected Items: {cart.length}</p>
        </div>
        <div className="product-container">
          <h3>Available Products: {products.length}</h3>
          <div className="products-grid">
            {products.map((product) => (
              <Products
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Products>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
