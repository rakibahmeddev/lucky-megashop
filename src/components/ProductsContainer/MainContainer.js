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
  const clearCart = () => {
    setCart([]);
  };
  const randomProduct = (cart) => {
    // console.log(cart);
    const item = Math.round(Math.random() * cart.length);
    const original = cart[item];
    alert(original.name);
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
          <div className="cart-button-group">
            <button onClick={() => randomProduct(cart)}>Choose 1 for me</button>
            <button onClick={clearCart}>Clear cart</button>
          </div>
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

      {/* QA section  */}
      <div className="qa-container">
        <h2 className="qa-title">Question and Answer</h2>
        <div className="qa-grid">
          <img
            src="https://i.ytimg.com/vi/cubqaCd9MGw/maxresdefault.jpg"
            alt=""
          />
          <div className="qa-text">
            <h2>How React js works?</h2>
            <p>
              React is a JavaScript library (not a framework) that creates user
              interfaces (UIs) in a predictable and efficient way using
              declarative code. And React is component based, and also hook
              based like useState, useEffect. So, I think component and hooks
              are the key of React.
            </p>
          </div>
        </div>
        {/* item 2  */}
        <div className="qa-grid">
          <div className="qa-text">
            <h2>How useState works?</h2>
            <p>
              useState is a Hook that allows you to have state variables in
              functional components. You pass the initial state to this function
              and it returns a variable with the current state value
            </p>
          </div>
          <img src="https://daveceddia.com/images/useState-hook.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
