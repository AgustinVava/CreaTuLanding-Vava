import React from "react";
import CartWidget from "./CartWidget";

const NavBar = ({ title, logo, cartItems, removeFromCart }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#333",
        color: "#fff",
      }}
    >
      <img src={logo} alt="Logo" style={{ height: "50px" }} />
      <h1>{title}</h1>
      <CartWidget cartItems={cartItems} removeFromCart={removeFromCart} />
    </nav>
  );
};

export default NavBar;
